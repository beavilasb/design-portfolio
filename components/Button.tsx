"use client";

import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

type ButtonVariant = "primary" | "primary-on-dark" | "secondary" | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md";
  iconRight?: ReactNode;
  children: ReactNode;
  /** Element id to smooth-scroll to on click, e.g. "contact". */
  scrollTo?: string;
}

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: "var(--color-bg-inverse)",
    color: "var(--color-text-inverse)",
  },
  "primary-on-dark": {
    background: "var(--white)",
    color: "var(--dark)",
  },
  secondary: {
    background: "var(--white)",
    color: "var(--dark)",
    boxShadow: "inset 0 0 0 1px var(--dark)",
  },
  accent: {
    background: "var(--color-accent)",
    color: "var(--white)",
  },
};

export default function Button({
  variant = "primary",
  size = "md",
  iconRight,
  children,
  style,
  scrollTo,
  onClick,
  ...rest
}: ButtonProps) {
  const base: CSSProperties = {
    fontFamily: "var(--font-primary)",
    fontWeight: 700,
    fontSize: 16,
    borderRadius: "var(--radius-pill)",
    padding: size === "sm" ? "8px 20px" : "12px 24px",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    border: "none",
    lineHeight: 1.5,
    transition: "opacity .15s ease",
  };

  const handleClick: ButtonProps["onClick"] = (e) => {
    onClick?.(e);
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      style={{ ...base, ...variantStyles[variant], ...style }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {children}
      {iconRight}
    </button>
  );
}
