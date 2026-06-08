import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}
      <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-ink-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
