import type { SVGProps } from "react";

/* ── EDIT YOUR REAL PROFILE LINKS HERE ── */
const FACEBOOK_URL = "https://facebook.com/auroxify";
const INSTAGRAM_URL = "https://instagram.com/auroxify";
const LINKEDIN_URL = "https://linkedin.com/company/auroxify";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 18, children, ...p }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...p}
    >
      {children}
    </svg>
  );
}

export function FacebookIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Svg>
  );
}

export function InstagramIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function LinkedInIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Svg>
  );
}

export const SOCIALS = [
  { label: "Facebook", href: FACEBOOK_URL, Icon: FacebookIcon },
  { label: "Instagram", href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: LinkedInIcon },
];