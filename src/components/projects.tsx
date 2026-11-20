"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BigSectionHeader } from "@/components/big-section-header";
import { moreProjectsUrl, projects, type Project } from "@/data/portfolio";
import { ease, flyIn, inViewOptions } from "@/lib/fly";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section className="screen-section flex flex-col border-t border-line lg:overflow-hidden">
      <BigSectionHeader
        eyebrow="Things I've built"
        title="Projects"
        aside={
          <>
            <p className="micro text-cream">{String(projects.length).padStart(2, "0")} projects / outside work</p>
            <p className="mt-3 text-sm leading-[1.6] text-muted">
              Personal and hackathon builds. My SnapShare.ai work is in Experience above.
            </p>
            <a
              href={moreProjectsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-1.5 text-[13px] text-accent transition-colors duration-250 ease-[ease] hover:text-cream"
            >
              More on GitHub
              <ArrowUpRight className="size-3.5 transition-transform duration-250 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </>
        }
      />
      <div className="grid min-h-0 flex-1 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectFeature
            key={project.title}
            project={project}
            index={i}
            className={cn(
              "border-line py-8 lg:py-[clamp(16px,3.4svh,32px)]",
              i === 0 ? "lg:pr-10" : "border-t lg:border-t-0 lg:border-l lg:pl-10",
            )}
          />
        ))}
      </div>
    </section>
  );
}

// Each project flies in when it scrolls into view. On wide screens both arrive together.
function ProjectFeature({ project, index, className }: { project: Project; index: number; className?: string }) {
  const projectRef = useRef<HTMLElement>(null);
  const play = useInView(projectRef, inViewOptions);
  const column = index * 2;

  return (
    <article ref={projectRef} className={cn("group flex min-h-0 flex-col", className)}>
      <motion.div
        className="flex items-center justify-between gap-4"
        initial={{ opacity: 0, y: -80 }}
        animate={play ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        <span className="font-display text-[40px] leading-none text-accent lg:text-[clamp(28px,4.4svh,40px)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="micro rounded-full border border-line-accent px-3 py-1 text-accent">{project.badge}</span>
      </motion.div>

      <motion.div
        className="relative mt-5 aspect-[16/10] shrink-0 overflow-hidden rounded-[4px] border border-line bg-surface transition-colors duration-250 ease-[ease] group-hover:border-accent lg:mt-[clamp(10px,2.2svh,20px)] lg:aspect-auto lg:h-[clamp(110px,26svh,300px)]"
        initial={{ opacity: 0, x: index % 2 ? 200 : -200 }}
        animate={play ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 1, delay: 0.15, ease }}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-top transition-transform duration-250 ease-[ease] group-hover:scale-[1.04]"
        />
      </motion.div>

      <motion.h3
        className="mt-6 font-display text-[clamp(32px,3.4vw,48px)] leading-none text-cream uppercase lg:mt-[clamp(12px,2.6svh,24px)] lg:text-[clamp(26px,min(3.4vw,5.4svh),48px)]"
        {...flyIn(play, column, 0)}
      >
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </motion.h3>
      <motion.p className="mt-2 font-serif text-lg text-cream/80 italic" {...flyIn(play, column + 1, 1)}>
        {project.tagline}
      </motion.p>

      <ul className="mt-5 flex flex-col gap-2 lg:mt-[clamp(10px,2svh,20px)] lg:gap-[clamp(4px,0.9svh,8px)]">
        {project.points.map((point, row) => (
          <motion.li
            key={point}
            className="flex gap-2.5 text-[13.5px] leading-[1.6] text-muted lg:text-[clamp(12.5px,1.5svh,14px)] lg:leading-[1.5]"
            {...flyIn(play, column, row + 2)}
          >
            <span aria-hidden="true" className="text-accent">
              &rsaquo;
            </span>
            {point}
          </motion.li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2 lg:mt-auto lg:pt-[clamp(10px,2svh,20px)]">
        {project.stack.map((tech, i) => (
          <motion.li
            key={tech}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-cream/80"
            {...flyIn(play, (i % 4) + index, i + 3)}
          >
            {tech}
          </motion.li>
        ))}
      </ul>
    </article>
  );
}
