"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BigSectionHeader } from "@/components/big-section-header";
import { experience, type ExperienceGroup } from "@/data/portfolio";
import { ease, flyDelay, flyFrom, inViewOptions, landed } from "@/lib/fly";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section className="screen-section flex flex-col border-t border-line lg:overflow-hidden">
      <BigSectionHeader
        eyebrow="Where I work"
        title="Experience"
        aside={
          <>
            <p className="micro text-cream">{experience.period}</p>
            <p className="mt-3 text-sm leading-[1.6] text-muted">{experience.summary}</p>
          </>
        }
      />
      <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]">
        <RoleColumn />
        <div className="grid md:grid-cols-2">
          {experience.groups.map((group, i) => (
            <WorkGroup key={group.title} group={group} index={i} className={groupClasses(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Stacked on mobile, 2x2 from tablet up; on desktop the grid sits right of the role column.
function groupClasses(index: number) {
  return cn(
    "border-t border-line py-6 lg:py-[clamp(12px,2.6svh,24px)]",
    index < 2 && "lg:border-t-0",
    index % 2 === 1 ? "md:border-l md:pl-8" : "md:pr-8 lg:pl-10",
  );
}

function RoleColumn() {
  const columnRef = useRef<HTMLDivElement>(null);
  const play = useInView(columnRef, inViewOptions);
  const fly = (row: number, column = 0) => ({
    initial: flyFrom(column, row),
    animate: play ? landed : undefined,
    transition: { duration: 0.9, delay: flyDelay(column, row), ease },
  });

  return (
    <div ref={columnRef} className="flex flex-col border-line py-8 lg:border-r lg:py-[clamp(16px,3.4svh,32px)] lg:pr-10">
      <motion.p className="micro text-accent" {...fly(0)}>
        Current role
      </motion.p>
      <motion.h3
        className="mt-4 font-display text-[clamp(44px,4.4vw,64px)] leading-[0.9] text-cream uppercase lg:mt-[clamp(8px,1.8svh,16px)] lg:text-[clamp(36px,min(4.4vw,7svh),64px)]"
        {...fly(1)}
      >
        {experience.company}
      </motion.h3>
      <motion.p className="mt-4 font-serif text-xl font-semibold text-cream lg:mt-[clamp(8px,1.8svh,16px)]" {...fly(2)}>
        {experience.role}
      </motion.p>
      <motion.p className="micro mt-3 text-muted" {...fly(3)}>
        {experience.period} / {experience.location}
      </motion.p>
      <ul className="mt-6 flex flex-wrap gap-2 lg:mt-[clamp(12px,2.6svh,24px)]">
        {experience.stack.map((tech, i) => (
          <motion.li
            key={tech}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-cream/80"
            {...fly(i, (i % 4) + 1)}
          >
            {tech}
          </motion.li>
        ))}
      </ul>
      <div className="mt-8 grid grid-cols-2 gap-6 lg:mt-auto lg:gap-[clamp(12px,2.6svh,24px)] lg:pt-[clamp(12px,3svh,40px)]">
        {experience.metrics.map((metric, i) => (
          <motion.div key={metric.label} className="border-t border-line pt-4" {...fly(4 + i, 2)}>
            <p className="font-display text-[40px] leading-none text-cream lg:text-[clamp(30px,4.4svh,40px)]">{metric.value}</p>
            <p className="micro mt-2 text-[10px] text-muted">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Each group flies in when it scrolls into view. On wide screens they all arrive together.
function WorkGroup({ group, index, className }: { group: ExperienceGroup; index: number; className?: string }) {
  const groupRef = useRef<HTMLDivElement>(null);
  const play = useInView(groupRef, inViewOptions);
  const { icon: Icon, title, points } = group;
  const column = index + 1;

  return (
    <div ref={groupRef} className={cn("flex flex-col", className)}>
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -80 }}
        animate={play ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.1 + index * 0.06, ease }}
      >
        <span className="font-display text-[28px] leading-none text-accent lg:text-[clamp(22px,3.1svh,28px)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Icon className="size-6 text-accent" strokeWidth={1.25} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: index % 2 ? 80 : -80 }}
        animate={play ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.06, ease }}
      >
        <h3 className="mt-4 font-display text-[clamp(22px,1.8vw,26px)] leading-[1.05] text-cream uppercase lg:mt-[clamp(8px,1.8svh,16px)] lg:text-[clamp(20px,min(1.8vw,2.9svh),26px)]">
          {title}
        </h3>
        <span className="mt-3 block h-0.5 w-6 bg-accent" />
      </motion.div>
      <ul className="mt-4 flex flex-col gap-2 lg:mt-[clamp(8px,1.8svh,16px)] lg:gap-[clamp(4px,0.9svh,8px)]">
        {points.map((point, row) => (
          <motion.li
            key={point}
            className="flex gap-2.5 text-[13.5px] leading-[1.6] text-muted lg:text-[clamp(12.5px,1.5svh,13.5px)] lg:leading-[1.5]"
            initial={flyFrom(column, row)}
            animate={play ? landed : undefined}
            transition={{ duration: 0.9, delay: flyDelay(column, row), ease }}
          >
            <span aria-hidden="true" className="text-accent">
              &rsaquo;
            </span>
            {point}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
