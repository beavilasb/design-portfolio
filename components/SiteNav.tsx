"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface NavLink {
  href: string;
  label: string;
}

interface SiteNavProps {
  theme?: "light" | "dark";
  logoSrc: string;
  logoHref?: string;
  links: NavLink[];
  ctaVariant?: "primary" | "primary-on-dark";
  onCtaClick?: () => void;
}

export default function SiteNav({
  theme = "light",
  logoSrc,
  logoHref = "/",
  links,
  ctaVariant = "primary",
  onCtaClick,
}: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const strokeColor = theme === "dark" ? "#fff" : "#1F1F1F";

  return (
    <>
      <nav>
        <Link className="logo" href={logoHref}>
          <Image src={logoSrc} alt="Bia Rodrigues logo" width={44} height={44} />
        </Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Button
          variant={ctaVariant}
          onClick={
            onCtaClick ??
            (() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }))
          }
        >
          Let&apos;s talk
        </Button>
        <button
          className="nav-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </nav>
      <div className={`nav-mobile-panel${open ? " open" : ""}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
