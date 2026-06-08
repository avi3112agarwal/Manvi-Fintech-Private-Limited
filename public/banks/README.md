# Bank Logos

Drop bank logo files here as **PNG**, **SVG**, or **WebP**.

## File naming

Match the `slug` defined for each bank in [`components/sections/Partners.tsx`](../../components/sections/Partners.tsx).

For example, for HDFC Bank the slug is `hdfc`, so the file is:

```
public/banks/hdfc.svg
```

(or `.png` / `.webp` — update the `ext` field for that bank in `Partners.tsx`).

## Recommended specs

| Format | When to use                        |
| ------ | ---------------------------------- |
| SVG    | **Preferred** — sharp at any size  |
| PNG    | Logos that don't have a vector     |
| WebP   | Photographic logos (rare)          |

- Transparent background
- Logo padded to ~10% of canvas (so tile looks balanced)
- Target height: 40–80 px equivalent
- For PNG: use ≥ 2× target size (e.g. 240×120 minimum) so it stays crisp on retina displays

## Current bank list

The list of banks (and slugs) lives in [`components/sections/Partners.tsx`](../../components/sections/Partners.tsx) — search for `BANKS`.

If you add a new bank, add an entry in that array.

## Until logos are added

If a logo file is missing, the partner tile **automatically falls back** to a gradient initial badge (e.g. `HD` for HDFC) — so the layout never breaks.
