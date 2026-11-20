import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Signature({ className }: { className?: string }) {
  return (
    <p
      aria-hidden="true"
      className={cn("font-signature -rotate-6 text-5xl text-cream/90 select-none", className, "leading-none")}
    >
      {profile.signature}
    </p>
  );
}
