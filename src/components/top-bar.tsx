import { topBar } from "@/data/portfolio";

const labelClass =
  "shrink-0 text-[10px] leading-normal tracking-[0.14em] text-cream uppercase sm:text-[11px] sm:tracking-[0.2em]";

export function TopBar() {
  return (
    <header className="flex h-16 items-center justify-between gap-3 sm:gap-6">
      <span className={labelClass}>{topBar.left}</span>
      <span className="hidden h-px flex-1 bg-line sm:block" />
      <span className={`${labelClass} flex items-center gap-2.5`}>
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        {topBar.right}
      </span>
    </header>
  );
}
