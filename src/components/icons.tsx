import { siGithub } from "simple-icons";

type IconProps = React.SVGProps<SVGSVGElement>;

const sparklePath =
  "M12 1C12.6 7.2 16.8 11.4 23 12C16.8 12.6 12.6 16.8 12 23C11.4 16.8 7.2 12.6 1 12C7.2 11.4 11.4 7.2 12 1Z";

export function Sparkle({ outline = false, ...props }: IconProps & { outline?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d={sparklePath}
        fill={outline ? "none" : "currentColor"}
        stroke={outline ? "currentColor" : "none"}
        strokeWidth={outline ? 1 : 0}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

// Lucide v1 ships without brand icons, so the LinkedIn mark is drawn here.
export function LinkedInLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 0h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zM6.5 4.6a1.95 1.95 0 1 0 0 3.9a1.95 1.95 0 1 0 0-3.9zM4.8 9.4h3.4v10H4.8zM10.4 9.4h3.2v1.5c.5-.9 1.7-1.8 3.4-1.8 3.3 0 4 2.1 4 4.9v5.4h-3.4v-4.8c0-1.2 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.9h-3.7z"
      />
    </svg>
  );
}

export function GitHubLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d={siGithub.path} />
    </svg>
  );
}

export function BrandIcon({ path, ...props }: IconProps & { path: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d={path} />
    </svg>
  );
}
