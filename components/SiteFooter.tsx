import Image from "next/image";
import Link from "next/link";

interface SiteFooterProps {
  aboutHref: string;
  servicesHref: string;
  workHref: string;
}

const socialIcons = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/biavlsb/",
    path: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/beatrizvbsrodrigues/",
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

export default function SiteFooter({
  aboutHref,
  servicesHref,
  workHref,
}: SiteFooterProps) {
  return (
    <footer>
      <div className="footer-top">
        <Link href={aboutHref} style={{ color: "#fff", fontWeight: 700 }}>
          About
        </Link>
        <Link href={servicesHref} style={{ color: "#fff", fontWeight: 700 }}>
          Services
        </Link>
        <Link className="footer-badge" href="/">
          <Image src="/assets/logo-mint.svg" alt="Bia Rodrigues" width={36} height={36} />
        </Link>
        <Link href={workHref} style={{ color: "#fff", fontWeight: 700 }}>
          Portfolio
        </Link>
      </div>
      <div className="footer-bottom">
        <p>Follow me on social media:</p>
        <div className="social-row">
          {socialIcons.map((icon) => (
            <a
              key={icon.label}
              href={icon.href}
              aria-label={icon.label}
              target="_blank"
              rel="noopener"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="16"
                height="16"
              >
                {icon.path}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
