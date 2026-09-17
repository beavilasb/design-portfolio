import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Button from "@/components/Button";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
];

interface ComingSoonCaseStudyProps {
  title: string;
  subtitle: string;
  overview: string;
}

export default function ComingSoonCaseStudy({
  title,
  subtitle,
  overview,
}: ComingSoonCaseStudyProps) {
  return (
    <>
      <div className="hero hero-dark">
        <div className="hero-bg" />
        <SiteNav
          theme="dark"
          logoSrc="/assets/logo-mint.svg"
          logoHref="/"
          links={navLinks}
          ctaVariant="primary-on-dark"
        />
        <div className="case-hero-content">
          <Link className="back-link" href="/#work">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to work
          </Link>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <section className="section-white">
        <div className="section-inner">
          <div className="eyebrow">Overview</div>
          <h2>Overview</h2>
          <p className="body">{overview}</p>

          <div className="construction-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <span>
              This case study is still in progress — the full write-up is
              coming soon.
            </span>
          </div>
        </div>
      </section>

      <section className="contact contact-narrow" id="contact">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have any question or project in mind? I&apos;d love to hear from
            you.
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <Button variant="primary" scrollTo="contact">
              Contact me
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter aboutHref="/#about" servicesHref="/#services" workHref="/#work" />
    </>
  );
}
