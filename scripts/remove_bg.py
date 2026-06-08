"""
Remove a flat background colour from each bank logo, using flood-fill from the
four corners so we only erase pixels connected to the border (interior pixels of
the same colour are preserved). Writes a transparent PNG next to the source.
"""

from __future__ import annotations

import sys
from pathlib import Path
from collections import deque

import numpy as np
from PIL import Image

BANKS_DIR = Path(__file__).resolve().parent.parent / "public" / "banks"
# Files to keep as-is (already transparent or you want untouched).
SKIP: set[str] = set()

# Per-file colour-distance tolerance (0-255). Higher = more aggressive removal.
DEFAULT_TOL = 32
TOL_OVERRIDES: dict[str, int] = {
    "aditya-birla-capital": 55,   # solid red, JPEG noise
    "shriram": 45,                # white + yellow strip
    "hdfc": 40,
    "tata-capital": 40,
}


def _bg_seeds(arr: np.ndarray) -> list[tuple[int, int, np.ndarray]]:
    """Pick distinct corner colours as background seeds (y, x, rgb)."""
    h, w, _ = arr.shape
    corners = [(0, 0), (0, w - 1), (h - 1, 0), (h - 1, w - 1)]
    seeds: list[tuple[int, int, np.ndarray]] = []
    for y, x in corners:
        c = arr[y, x, :3].astype(np.int16)
        if not any(np.linalg.norm(c - s[2]) < 10 for s in seeds):
            seeds.append((y, x, c))
    return seeds


def _flood_mask(arr: np.ndarray, seeds: list[tuple[int, int, np.ndarray]], tol: int) -> np.ndarray:
    """BFS flood-fill from each seed across pixels within `tol` of the seed colour."""
    h, w, _ = arr.shape
    mask = np.zeros((h, w), dtype=bool)
    tol_sq = tol * tol
    rgb = arr[:, :, :3].astype(np.int16)

    for sy, sx, seed in seeds:
        # Distance from the seed colour, squared.
        diff = rgb - seed
        dist_sq = (diff * diff).sum(axis=2)
        candidate = dist_sq <= tol_sq

        if not candidate[sy, sx]:
            continue

        # BFS over candidate pixels starting at the seed.
        q = deque([(sy, sx)])
        local = np.zeros_like(mask)
        local[sy, sx] = True
        while q:
            y, x = q.popleft()
            for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                ny, nx = y + dy, x + dx
                if 0 <= ny < h and 0 <= nx < w and not local[ny, nx] and candidate[ny, nx]:
                    local[ny, nx] = True
                    q.append((ny, nx))
        mask |= local
    return mask


def process(src: Path) -> Path | None:
    name = src.stem
    if name in SKIP:
        return None

    img = Image.open(src).convert("RGBA")
    arr = np.array(img)
    h, w = arr.shape[:2]

    tol = TOL_OVERRIDES.get(name, DEFAULT_TOL)
    seeds = _bg_seeds(arr)
    if not seeds:
        return None

    mask = _flood_mask(arr, seeds, tol)
    if mask.sum() / (h * w) > 0.995:
        # Almost everything matched — bail out to avoid wiping the whole image.
        print(f"  [!] {src.name}: refusing to erase ~all pixels (tol={tol})")
        return None

    # Anti-alias edge cleanup: feather alpha based on local colour distance.
    arr[mask, 3] = 0
    out = Image.fromarray(arr, "RGBA")
    dst = src.with_suffix(".png")
    out.save(dst, "PNG", optimize=True)
    print(f"  [ok] {src.name} -> {dst.name}  (erased {mask.sum()/(h*w)*100:.1f}% pixels, tol={tol})")
    return dst


def main() -> int:
    if not BANKS_DIR.exists():
        print(f"banks dir not found: {BANKS_DIR}", file=sys.stderr)
        return 1

    processed: list[tuple[Path, Path]] = []
    for src in sorted(BANKS_DIR.iterdir()):
        if src.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp", ".avif"}:
            continue
        if src.name.lower() == "readme.md":
            continue
        dst = process(src)
        if dst and dst != src:
            processed.append((src, dst))

    # Delete originals once we've written a transparent PNG counterpart.
    for src, dst in processed:
        if src.exists() and src.suffix.lower() != ".png":
            try:
                src.unlink()
                print(f"  - removed original {src.name}")
            except OSError as exc:
                print(f"  [!] could not remove {src.name}: {exc}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
