"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ease, inViewOptions } from "@/lib/fly";
import { cn } from "@/lib/utils";

type BigSectionHeaderProps = {
  eyebrow: string;
  title: string;
  aside?: React.ReactNode;
  size?: "large" | "medium";
};

const titleSizes = {
  large: "text-[clamp(56px,9vw,128px)] lg:text-[clamp(64px,min(9vw,13svh),128px)]",
  medium: "text-[clamp(48px,6vw,88px)] lg:text-[clamp(48px,min(6vw,10svh),88px)]",
};

export function BigSectionHeader({ eyebrow, title, aside, size = "large" }: BigSectionHeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const play = useInView(headerRef, inViewOptions);
  const words = title.split(" ");
  // running letter count, so the drop-in stagger flows across words
  const wordStarts = words.map((_, w) => words.slice(0, w).join("").length + w);

  return (
    <header ref={headerRef} className="flex shrink-0 flex-wrap items-end justify-between gap-6 border-b border-line py-8 lg:py-[clamp(16px,3.4svh,32px)]">
      <div>
        <motion.p
          className="micro text-accent"
          initial={{ opacity: 0, x: -40 }}
          animate={play ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.7, ease }}
        >
          {eyebrow}
        </motion.p>
        <h2
          aria-label={title}
          // leading goes after the size: tailwind-merge drops a line-height that comes before a font size
          className={cn("mt-3 flex flex-wrap gap-x-[0.22em] font-display text-cream uppercase", titleSizes[size], "leading-[0.85]")}
        >
          {/* words stay whole so long titles wrap between words on narrow screens */}
          {words.map((word, w) => (
            <span key={w} aria-hidden="true" className="flex whitespace-nowrap">
              {word.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: -120 }}
                  animate={play ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.8, delay: 0.1 + (wordStarts[w] + i) * 0.05, ease }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h2>
      </div>
      {aside && (
        <motion.div
          className="max-w-[340px]"
          initial={{ opacity: 0, x: 60 }}
          animate={play ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          {aside}
        </motion.div>
      )}
    </header>
  );
}
