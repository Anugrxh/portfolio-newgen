"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BigSectionHeader } from "@/components/big-section-header";
import { techStack, type TechCategory } from "@/data/portfolio";
import { ease, flyDelay, flyFrom, inViewOptions, landed } from "@/lib/fly";
import { cn } from "@/lib/utils";

const toolCount = techStack.reduce((total, category) => total + category.items.length, 0);

export function TechStack() {
  return (
    <section className="screen-section mt-12 flex flex-col border-t border-line lg:mt-0 lg:overflow-hidden">
      <BigSectionHeader
        eyebrow="What I build with"
        title="Tech Stack"
        aside={
          <>
            <p className="micro text-cream">
              {techStack.length} categories / {toolCount} tools
            </p>
            <p className="mt-3 text-sm leading-[1.6] text-muted">
              The tools I use to plan, build and run production systems, backend and cloud first.
            </p>
          </>
        }
      />
      <div className="grid min-h-0 flex-1 md:grid-cols-2 lg:grid-cols-5">
        {techStack.map((category, i) => (
          <TechColumn
            key={category.title}
            category={category}
            column={i}
            className={columnClasses(i, techStack.length)}
          />
        ))}
      </div>
    </section>
  );
}

// Dividers and padding per position: stacked on mobile, two columns on tablet
// (the last one spanning both), one row on desktop with the outer edges flush.
function columnClasses(index: number, count: number) {
  const last = index === count - 1;
  return cn(
    "border-line py-8 lg:py-[clamp(16px,3.4svh,32px)]",
    index > 0 && "border-t",
    index === 1 && "md:border-t-0",
    index % 2 === 1 && "md:border-l",
    last ? "md:col-span-2 md:px-0" : index % 2 === 0 ? "md:pr-8" : "md:pl-8",
    "lg:col-span-1 lg:border-t-0 lg:px-6",
    index > 0 && "lg:border-l",
    index === 0 && "lg:pl-0",
    last && "lg:pr-0",
  );
}

// Each column flies in when it scrolls into view. On wide screens they all arrive together.
function TechColumn({ category, column, className }: { category: TechCategory; column: number; className?: string }) {
  const columnRef = useRef<HTMLDivElement>(null);
  const play = useInView(columnRef, inViewOptions);
  const { icon: Icon, title, items } = category;

  return (
    <div ref={columnRef} className={cn("flex flex-col", className)}>
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -80 }}
        animate={play ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.1 + column * 0.06, ease }}
      >
        <span className="font-display text-[40px] leading-none text-accent lg:text-[clamp(28px,4.4svh,40px)]">
          {String(column + 1).padStart(2, "0")}
        </span>
        <Icon className="size-7 text-accent" strokeWidth={1.25} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: column % 2 ? 80 : -80 }}
        animate={play ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.2 + column * 0.06, ease }}
      >
        <h3 className="mt-6 font-display text-[clamp(24px,2.1vw,30px)] leading-[1.05] text-cream uppercase lg:mt-[clamp(10px,2.4svh,24px)] lg:text-[clamp(22px,min(2.1vw,3.4svh),30px)]">
          {title}
        </h3>
        <span className="mt-4 block h-0.5 w-6 bg-accent" />
      </motion.div>
      <ul className="mt-8 flex flex-col lg:mt-auto lg:pt-[clamp(12px,3svh,40px)]">
        {items.map((item, row) => (
          <motion.li
            key={item}
            className="flex gap-2.5 border-b border-line py-3 font-mono text-[15px] leading-[1.4] text-cream/90 first:border-t lg:py-[clamp(5px,1.35svh,14px)] lg:text-[clamp(14px,1.9svh,16px)]"
            initial={flyFrom(column, row)}
            animate={play ? landed : undefined}
            transition={{ duration: 0.9, delay: flyDelay(column, row), ease }}
          >
            <span aria-hidden="true" className="text-accent">
              &rsaquo;
            </span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
