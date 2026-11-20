import { Sparkle } from "@/components/icons";
import { hero } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const radius = 44;

export function RotatingBadge({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative rounded-full border border-line bg-ink/85 backdrop-blur-sm", className)}
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-spin-slow">
        <defs>
          <path
            id="badge-circle"
            d={`M60,60 m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="fill-cream font-sans text-[9px] font-medium uppercase">
          <textPath href="#badge-circle" textLength={2 * Math.PI * radius - 2} lengthAdjust="spacing">
            {hero.badgeText}
          </textPath>
        </text>
      </svg>
      <Sparkle className="absolute top-1/2 left-1/2 size-[22%] -translate-x-1/2 -translate-y-1/2 text-accent" />
    </div>
  );
}
