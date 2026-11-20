"use client";

import { QRCodeSVG } from "qrcode.react";
import { GitHubLogo, LinkedInLogo } from "@/components/icons";

type QrTileProps = {
  label: string;
  url: string;
  logo: "linkedin" | "github";
};

export function QrTile({ label, url, logo }: QrTileProps) {
  const Logo = logo === "linkedin" ? LinkedInLogo : GitHubLogo;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${label}`}
      className="group flex flex-col items-center gap-3"
    >
      <span className="relative flex size-[120px] items-center justify-center rounded-[6px] bg-cream p-2 lg:size-[clamp(110px,18svh,150px)] transition-[translate,box-shadow] duration-250 ease-[ease] group-hover:-translate-y-0.5 group-hover:shadow-[0_0_28px_-6px_var(--color-glow)]">
        <QRCodeSVG value={url} level="H" bgColor="#EADCC6" fgColor="#0A0606" marginSize={0} className="size-full" />
        <span className="absolute flex size-[24%] items-center justify-center rounded-md bg-cream">
          <Logo className="size-[72%] text-ink" />
        </span>
      </span>
      <span className="micro text-cream">{label}</span>
    </a>
  );
}
