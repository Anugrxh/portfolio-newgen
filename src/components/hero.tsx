"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { RotatingBadge } from "@/components/rotating-badge";
import { Signature } from "@/components/signature";
import { hero, profile, stats } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const wordY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const letters = hero.word.toUpperCase().split("");
  // the sun, image and columns start once the letters have landed
  const lettersDone = 0.15 + letters.length * 0.06 + 0.4;

  return (
    <section ref={sectionRef} className="hero @container relative max-md:flex max-md:h-[calc(100svh-4rem)] max-md:min-h-[30rem] max-md:flex-col lg:flex lg:flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-[30%] -top-[20cqw] h-[110cqw] lg:h-[calc(100%+20cqw)] bg-[radial-gradient(ellipse_50%_45%_at_50%_45%,rgb(179_32_28/0.22),transparent_70%)]"
      />

      <div className="relative max-md:min-h-0 max-md:flex-1">
        <motion.div
          aria-hidden="true"
          className="hero-sun absolute top-[10cqw] left-1/2 z-0 aspect-square w-[82cqw] -translate-x-1/2 rounded-full shadow-[0_0_120px_30px_var(--color-glow)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_92%)] md:top-[9cqw] md:w-[64cqw]"
          style={{
            background:
              "radial-gradient(circle at 50% 28%, #b3201c 0%, #8c1714 36%, #6e0f0f 62%, #3a0808 100%)",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: lettersDone, ease }}
        />

        <motion.div
          aria-hidden="true"
          style={{ y: wordY }}
          className="hero-word relative z-10 flex justify-between font-display text-[29.1cqw] leading-[0.85] whitespace-nowrap uppercase"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="print-texture inline-block"
              initial={{ opacity: 0, y: "35%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <RotatingBadge className="hero-badge absolute top-[13.5cqw] right-0 z-30 size-[clamp(76px,10cqw,128px)]" />

        <div className="hero-image relative z-20 mx-auto -mt-[37.5cqw] w-[80cqw] md:-mt-[31cqw] md:w-[60cqw]">
          <motion.div style={{ y: imageY }} className="max-md:h-full lg:h-full">
            <motion.div
              className="max-md:h-full lg:h-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: lettersDone + 0.35, ease }}
            >
              <Image
                src="/images/hero.png"
                alt={`${profile.firstName} ${profile.lastName}`}
                width={1024}
                height={1536}
                preload
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 60vw, 80vw"
                className="h-auto w-full [mask-image:linear-gradient(to_bottom,black_58%,transparent_94%)] max-md:h-full max-md:w-auto lg:h-full lg:w-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative z-30 -mt-[6cqw] grid shrink-0 gap-12 max-md:pb-[clamp(14px,2.6svh,24px)] md:-mt-[10cqw] md:grid-cols-2 md:gap-x-10 lg:mt-[3cqw] lg:min-h-0 lg:flex-1 lg:grid-cols-[27fr_43fr_30fr] lg:gap-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: lettersDone + 0.6, ease }}
      >
        <div className="flex flex-col">
          <p className="font-display text-[clamp(34px,3.75cqw,48px)] leading-none text-cream uppercase max-md:text-[clamp(26px,4.8svh,40px)] lg:text-[clamp(28px,min(3.75cqw,5.2svh),48px)]">
            {hero.disciplines}
          </p>
          <ul className="mt-4 flex flex-col gap-1.5 max-md:mt-[clamp(6px,1.4svh,16px)] lg:mt-[clamp(8px,1.6svh,16px)]">
            {hero.disciplineLabels.map((label) => (
              <li key={label} className="micro text-muted">
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-10 max-md:mt-[clamp(12px,3svh,40px)] max-md:text-center lg:mt-[clamp(14px,4svh,40px)]">
            <span aria-hidden="true" className="block h-9 font-serif text-[88px] leading-[0.9] text-accent">
              &ldquo;
            </span>
            <p className="max-w-[270px] text-xs leading-[1.9] font-medium tracking-[0.22em] text-cream uppercase max-md:mx-auto">
              {hero.quote}
            </p>
          </div>
          <Signature className="mt-7 ml-1 max-md:mt-[clamp(8px,2svh,28px)] max-md:ml-0 max-md:self-center max-md:text-[clamp(30px,5.5svh,48px)] lg:mt-[clamp(8px,2.6svh,28px)] lg:text-[clamp(30px,5svh,48px)]" />
        </div>

        <div className="hidden lg:block" />

        <div className="flex flex-col max-md:sr-only lg:pl-4">
          <h1 className="font-serif text-[clamp(30px,3.4cqw,44px)] leading-[1.08] font-semibold tracking-[0.05em] text-cream uppercase lg:text-[clamp(24px,min(3.4cqw,4.6svh),44px)]">
            <span className="sr-only">
              {profile.firstName} {profile.lastName},{" "}
            </span>
            {profile.roleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-[340px] text-sm leading-[1.6] text-muted lg:mt-[clamp(10px,2svh,20px)]">{profile.bio}</p>
          <span className="my-6 h-px w-full bg-line lg:my-[clamp(10px,2.6svh,24px)]" />
          <div className="grid grid-cols-3 gap-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={value} className="flex flex-col">
                <div className="flex items-center gap-2 lg:flex-col lg:items-start xl:flex-row xl:items-center xl:gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line-accent xl:size-9">
                    <Icon className="size-4 text-accent" strokeWidth={1.25} />
                  </span>
                  <p className="font-display text-[clamp(24px,2.4cqw,30px)] leading-none text-cream">{value}</p>
                </div>
                <p className="micro mt-2.5 text-[10px] text-muted">
                  {label[0]}
                  <br />
                  {label[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
