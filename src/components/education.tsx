"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BigSectionHeader } from "@/components/big-section-header";
import { Sparkle } from "@/components/icons";
import { certifications, education, type EducationEntry } from "@/data/portfolio";
import { ease, flyIn, inViewOptions } from "@/lib/fly";
import { cn } from "@/lib/utils";

// A short section on purpose: not a full screen.
export function Education() {
  const certificationsRef = useRef<HTMLDivElement>(null);
  const playCertifications = useInView(certificationsRef, inViewOptions);

  return (
    <section className="flex flex-col border-t border-line">
      <BigSectionHeader
        size="medium"
        eyebrow="Where I studied"
        title="Education"
        aside={
          <>
            <p className="micro text-cream">MCA / BCA / Higher Secondary</p>
            <p className="mt-3 text-sm leading-[1.6] text-muted">
              Computer applications at Kannur University, finishing my MCA with a CGPA of 8.78.
            </p>
          </>
        }
      />
      <div className="grid md:grid-cols-3">
        {education.map((entry, i) => (
          <EducationColumn
            key={entry.degree}
            entry={entry}
            index={i}
            className={cn(
              "border-line py-8",
              i > 0 && "border-t md:border-t-0 md:border-l md:pl-8",
              i < education.length - 1 && "md:pr-8",
            )}
          />
        ))}
      </div>
      <div
        ref={certificationsRef}
        className="flex flex-col gap-4 border-t border-line py-6 md:flex-row md:items-center md:gap-10"
      >
        <motion.p
          className="micro shrink-0 text-accent"
          initial={{ opacity: 0, x: -60 }}
          animate={playCertifications ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.8, ease }}
        >
          Certifications & achievements
        </motion.p>
        <ul className="flex flex-wrap gap-x-10 gap-y-3">
          {certifications.map((item, i) => (
            <motion.li
              key={item}
              className="flex items-center gap-2.5 text-sm text-cream/85"
              {...flyIn(playCertifications, i + 1, i)}
            >
              <Sparkle className="size-3 shrink-0 text-accent" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function EducationColumn({ entry, index, className }: { entry: EducationEntry; index: number; className?: string }) {
  const columnRef = useRef<HTMLDivElement>(null);
  const play = useInView(columnRef, inViewOptions);

  return (
    <div ref={columnRef} className={cn("flex flex-col", className)}>
      <motion.p className="font-mono text-xs text-accent" {...flyIn(play, index, 0)}>
        {entry.period}
      </motion.p>
      <motion.h3
        className="mt-4 font-display text-[clamp(22px,2vw,28px)] leading-[1.05] text-cream uppercase"
        {...flyIn(play, index, 1)}
      >
        {entry.degree}
      </motion.h3>
      <motion.p className="mt-2 font-serif text-cream/75 italic" {...flyIn(play, index + 1, 2)}>
        {entry.school}
      </motion.p>
      <motion.div className="mt-6 flex items-end gap-3 border-t border-line pt-4 md:mt-auto" {...flyIn(play, index + 2, 3)}>
        <span className="font-display text-[48px] leading-none text-cream">{entry.score}</span>
        <span className="micro pb-1 text-muted">{entry.scoreLabel}</span>
      </motion.div>
    </div>
  );
}
