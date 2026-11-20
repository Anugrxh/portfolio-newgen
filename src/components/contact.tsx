"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BigSectionHeader } from "@/components/big-section-header";
import { Sparkle } from "@/components/icons";
import { QrTile } from "@/components/qr-tile";
import { Signature } from "@/components/signature";
import { closingLines, contact, contactItems, profile, qrCodes } from "@/data/portfolio";
import { ease, flyIn, inViewOptions } from "@/lib/fly";

export function Contact() {
  return (
    <section id="contact" className="screen-section flex flex-col border-t border-line lg:overflow-hidden">
      <BigSectionHeader
        eyebrow="Get in touch"
        title={contact.title}
        aside={<p className="text-sm leading-[1.6] text-muted">{contact.intro}</p>}
      />
      <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <ContactList />
        <ScanToConnect />
        <Closing />
      </div>
      <div className="micro flex items-center justify-between gap-4 border-t border-line py-5 text-muted">
        <span>
          &copy; {contact.year} {profile.firstName} {profile.lastName}
        </span>
        <a href="#top" className="group inline-flex items-center gap-2 transition-colors duration-250 ease-[ease] hover:text-cream max-md:-m-3 max-md:p-3">
          <span className="max-md:sr-only">Back to top</span>
          <ArrowUp className="size-3.5 transition-transform duration-250 ease-[ease] group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}

function ContactList() {
  const listRef = useRef<HTMLUListElement>(null);
  const play = useInView(listRef, inViewOptions);

  return (
    <div className="flex flex-col justify-center py-8 lg:py-[clamp(16px,3.4svh,32px)] lg:pr-10">
      <ul ref={listRef} className="flex flex-col">
        {contactItems.map(({ icon: Icon, kind, label, href }, i) => {
          const external = href?.startsWith("http");
          const content = (
            <>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line-accent transition-colors duration-250 ease-[ease] group-hover:border-accent">
                <Icon className="size-4 text-accent" strokeWidth={1.25} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="micro block text-muted">{kind}</span>
                <span className="mt-1 block text-[clamp(15px,1.4vw,19px)] break-all text-cream">{label}</span>
              </span>
              {href && (
                <ArrowUpRight className="size-4 shrink-0 text-muted transition-[color,translate] duration-250 ease-[ease] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              )}
            </>
          );
          const rowClass =
            "group flex items-center gap-4 border-b border-line py-4 first:border-t lg:py-[clamp(10px,2.2svh,20px)]";
          return (
            <motion.li key={kind} {...flyIn(play, i % 2, i)}>
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={rowClass}
                >
                  {content}
                </a>
              ) : (
                <div className={rowClass}>{content}</div>
              )}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

function ScanToConnect() {
  const columnRef = useRef<HTMLDivElement>(null);
  const play = useInView(columnRef, inViewOptions);

  return (
    <div
      ref={columnRef}
      className="flex flex-col justify-center border-t border-line py-8 lg:border-t-0 lg:border-l lg:px-10 lg:py-[clamp(16px,3.4svh,32px)]"
    >
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={play ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        <h3 className="font-display text-[28px] leading-none text-cream uppercase lg:text-[clamp(22px,3.4svh,30px)]">
          Scan to Connect
        </h3>
        <span className="mt-3 block h-0.5 w-6 bg-accent" />
      </motion.div>
      <div className="mt-8 flex gap-6 max-md:justify-center lg:mt-[clamp(14px,3.4svh,32px)]">
        {qrCodes.map((qr, i) => (
          <motion.div key={qr.label} {...flyIn(play, i * 2, i + 1)}>
            <QrTile label={qr.label} url={qr.url} logo={qr.logo} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Closing() {
  const columnRef = useRef<HTMLDivElement>(null);
  const play = useInView(columnRef, inViewOptions);

  return (
    <div
      ref={columnRef}
      className="flex flex-col justify-center border-t border-line py-8 max-md:items-center max-md:text-center lg:border-t-0 lg:border-l lg:py-[clamp(16px,3.4svh,32px)] lg:pl-10"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
        animate={play ? { opacity: 1, rotate: 0, scale: 1 } : undefined}
        transition={{ duration: 1, delay: 0.1, ease }}
      >
        <Sparkle outline className="size-20 text-accent lg:size-[clamp(56px,10svh,88px)]" />
      </motion.div>
      <p className="mt-6 font-serif text-[clamp(17px,1.6vw,24px)] leading-[1.7] tracking-[0.22em] text-cream uppercase italic lg:mt-[clamp(12px,3svh,28px)]">
        {closingLines.map((line, i) => (
          <motion.span key={line} className="block" {...flyIn(play, i + 1, i)}>
            {line}
          </motion.span>
        ))}
      </p>
      <motion.div {...flyIn(play, 2, 4)}>
        <Signature className="mt-5 ml-1 text-[clamp(40px,6svh,56px)] max-md:ml-0" />
      </motion.div>
    </div>
  );
}
