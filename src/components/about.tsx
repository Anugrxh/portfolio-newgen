"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BigSectionHeader } from "@/components/big-section-header";
import { BrandIcon } from "@/components/icons";
import { WireframeGlobe } from "@/components/wireframe-globe";
import { about, profile, testimonial, tools } from "@/data/portfolio";
import { ease, flyIn, inViewOptions } from "@/lib/fly";

export function About() {
  return (
    <section className="screen-section flex flex-col border-t border-line lg:overflow-hidden">
      <BigSectionHeader
        eyebrow="Who I am"
        title="About Me"
        aside={
          <>
            <p className="micro text-cream">Based in {profile.location}</p>
            <p className="mt-3 text-sm leading-[1.6] text-muted">{profile.role}, backend and cloud first.</p>
          </>
        }
      />
      <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <AboutText />
        <ToolsAndQuote />
      </div>
    </section>
  );
}

function AboutText() {
  const textRef = useRef<HTMLDivElement>(null);
  const play = useInView(textRef, inViewOptions);

  return (
    <div
      ref={textRef}
      className="flex flex-col border-line py-8 lg:border-r lg:py-[clamp(16px,3.4svh,32px)] lg:pr-12"
    >
      <motion.p
        className="font-serif text-[clamp(22px,2.2vw,32px)] leading-[1.35] text-cream lg:text-[clamp(19px,min(2.2vw,3.5svh),32px)]"
        {...flyIn(play, 0, 0)}
      >
        {about.lead}
      </motion.p>
      <div className="mt-6 flex flex-col gap-3 lg:mt-[clamp(12px,3svh,28px)]">
        {about.paragraphs.map((paragraph, i) => (
          <motion.p
            key={paragraph}
            className="max-w-[560px] text-[14px] leading-[1.7] text-muted lg:text-[clamp(13px,1.6svh,15px)]"
            {...flyIn(play, i + 1, i + 1)}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
      <ul className="mt-8 grid grid-cols-2 gap-px border border-line bg-line lg:mt-auto">
        {about.traits.map((trait, i) => (
          <motion.li
            key={trait}
            className="flex items-center gap-3 bg-ink px-4 py-4 text-sm text-cream lg:py-[clamp(10px,2svh,18px)]"
            {...flyIn(play, i, i + 3)}
          >
            <span className="size-1.5 shrink-0 rounded-full bg-accent" />
            {trait}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function ToolsAndQuote() {
  const columnRef = useRef<HTMLDivElement>(null);
  const play = useInView(columnRef, inViewOptions);

  return (
    <div
      ref={columnRef}
      className="relative flex flex-col overflow-hidden border-t border-line py-8 lg:border-t-0 lg:py-[clamp(16px,3.4svh,32px)] lg:pl-12"
    >
      <WireframeGlobe className="pointer-events-none absolute top-1/2 -right-[170px] size-[480px] -translate-y-1/2 text-accent opacity-15" />

      <motion.div
        className="relative flex items-end justify-between gap-4"
        initial={{ opacity: 0, y: -80 }}
        animate={play ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        <div>
          <h3 className="font-display text-[28px] leading-none text-cream uppercase lg:text-[clamp(22px,3.4svh,30px)]">
            Tools I Use
          </h3>
          <span className="mt-3 block h-0.5 w-6 bg-accent" />
        </div>
        <span className="micro text-muted">Every day</span>
      </motion.div>

      <ul className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-[clamp(12px,3svh,28px)]">
        {tools.map((tool, i) => (
          <motion.li
            key={tool.name}
            className="group flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3 transition-colors duration-250 ease-[ease] hover:border-accent lg:py-[clamp(8px,1.6svh,14px)]"
            {...flyIn(play, i % 3, i)}
          >
            <BrandIcon
              path={tool.path}
              className="size-6 shrink-0 text-cream transition-colors duration-250 ease-[ease] group-hover:text-accent"
            />
            <span className="font-mono text-[13px] text-cream/85">{tool.name}</span>
          </motion.li>
        ))}
      </ul>

      <motion.figure
        className="relative mt-10 border-t border-line pt-6 lg:mt-auto lg:pt-[clamp(14px,3svh,28px)]"
        initial={{ opacity: 0, x: 160 }}
        animate={play ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 1, delay: 0.45, ease }}
      >
        <span aria-hidden="true" className="block h-10 font-serif text-[80px] leading-[0.9] text-accent">
          &ldquo;
        </span>
        <blockquote className="font-serif text-[clamp(16px,1.4vw,20px)] leading-[1.6] text-cream/90 italic lg:text-[clamp(15px,min(1.4vw,2.3svh),20px)]">
          {testimonial.text}
        </blockquote>
        <figcaption className="mt-5 flex items-center justify-end gap-3 lg:mt-[clamp(10px,2svh,20px)]">
          <span className="h-px w-8 bg-accent" />
          <span className="text-right">
            <span className="micro block text-cream">{testimonial.author}</span>
            <span className="micro mt-1 block text-[10px] text-muted">{testimonial.role}</span>
          </span>
        </figcaption>
      </motion.figure>
    </div>
  );
}
