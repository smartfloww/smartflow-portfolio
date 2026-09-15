import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small caps label above the title. */
  eyebrow: string;
  /** Section title (rendered in the display serif). */
  title: React.ReactNode;
  /** Optional supporting line under the title. */
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Use the light-on-dark variant for dark sections. */
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "flex flex-col items-center text-center",
        className
      )}
    >
      <p
        className={cn(
          "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs",
          dark ? "text-gold" : "text-gold-deep",
          align === "center" && "justify-center"
        )}
      >
        <span
          aria-hidden="true"
          className={cn("h-px w-8", dark ? "bg-gold" : "bg-gold-deep")}
        />
        {eyebrow}
        {align === "center" && (
          <span aria-hidden="true" className={cn("h-px w-8", dark ? "bg-gold" : "bg-gold-deep")} />
        )}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-3xl leading-[1.12] tracking-[-0.01em] sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-xl text-[15px] leading-relaxed sm:text-base",
            dark ? "text-paper/70" : "text-ink-soft",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
