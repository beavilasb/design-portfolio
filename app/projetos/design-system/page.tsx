import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ComponentCarousel from "@/components/ComponentCarousel";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Design System from Scratch — Bia Rodrigues",
};

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
];

export default function DesignSystemCaseStudy() {
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
          <h1>Design System from scratch</h1>
          <p>A system built for scale, consistency, accessibility and AI-readiness</p>
        </div>
      </div>

      <section className="section-white">
        <div className="section-inner">
          <div className="eyebrow">Overview</div>
          <h2>Overview</h2>
          <p className="body">
            Gupy&apos;s five-product HR platform shared a logo. Everything
            else — components, colors, typography, spacing — was
            inconsistent across products that had grown through three
            acquisitions. I built the ECO Design System from the ground up:
            starting with the ROI case that secured the investment, through
            the first 35 global components, to 100% of new product launches
            shipping on the system. The final chapter extended it to
            Gupy&apos;s AI surface — IAGente — with a full chat component
            library and UX principles for AI-generated output.
          </p>
        </div>
      </section>

      <section className="section-grey">
        <div className="section-inner stack">
          <div>
            <div className="eyebrow">Problem</div>
            <h2>Five different visual languages</h2>
            <Image
              className="figure"
              src="/assets/comparativo-pre-ds.png"
              alt="Five products, five visual languages"
              width={3216}
              height={1588}
            />
            <p className="body">
              {`Gupy's product suite grew through three acquisitions. Treinamento arrived with a consumer-app aesthetic — blue hero cards, a hamburger menu, a different icon language entirely. Engajamento and Performance came with their own magenta and teal palettes. All five products shared the Gupy logo. Component libraries, color systems, spacing conventions, and interaction patterns were built independently across each one.

The business consequence was direct. Gupy's cross-sell strategy depended on customers adopting multiple products. But each product felt like a different company. The fragmentation wasn't a design problem — it was a business problem with a design solution.`}
            </p>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="section-inner stack">
          <div>
            <div className="eyebrow">Results</div>
            <h2>ROI Projection</h2>
            <Image
              className="figure"
              src="/assets/chart-roi-projection.png"
              alt="5-year ROI projection"
              width={760}
              height={428}
            />
            <p className="body">
              The business case presented projected a 199% ROI over five
              years — every dollar invested returning three times over,
              modeled conservatively across the design and engineering
              teams. The design team alone projected 169% ROI; engineering,
              210%. Even under worst-case assumptions, the model cleared
              150%. The investment was approved on those numbers, not on
              design principles.
            </p>
          </div>
          <div>
            <h2>Support tickets reduction</h2>
            <Image
              className="figure figure-top"
              src="/assets/chart-support-requests.png"
              alt="Design system support requests over time"
              width={760}
              height={428}
            />
            <p className="body">
              {`The clearest measure of system health over time was support request volume on the DS channel. It opened in September 2024 with 92 requests in the first semester — high, but expected for a system in active adoption. Each cluster of questions pointed to a specific gap: missing documentation, an underdeveloped component variant, an unclear pattern. Closing each gap permanently reduced future volume. By the first half of 2026, requests had dropped to 21 per semester — a 77% reduction driven not by less usage, but by a system that had learned to answer its own questions.

Beyond those two headline numbers: 100% of new product launches shipped on ECO DS from day one, cross products launched with zero migration debt, R&S legacy adoption increased 30% across its core feature set, and Cursor-assisted handoff reduced delivery time by 60%. By June 2026, the library stood at 43 global components — extended, not replaced, when Gupy's AI surface required a new design language.`}
            </p>
          </div>
        </div>
      </section>

      <section className="section-grey">
        <div className="section-inner stack">
          <div>
            <div className="eyebrow">Design Process</div>
            <h2>Tokens as the single language</h2>
            <Image
              className="figure"
              src="/assets/tokens-hierarchy.png"
              alt="Token hierarchy: primitive, semantic, component"
              width={760}
              height={428}
            />
            <p className="body">
              The component library was built on a three-tier token
              architecture: primitive tokens defining raw values (color
              ramps, spacing units, type scales), semantic tokens mapping
              those values to their intended use (primary action, surface
              background, body text), and component tokens connecting
              semantic decisions to specific UI elements. A change at the
              primitive level — a brand color update, a spacing adjustment —
              propagated consistently across all components and all five
              products at once. Tokens were the contract between design and
              engineering that made the system scalable without requiring
              ongoing manual coordination.
            </p>
          </div>
          <div>
            <h2>Launch and governance</h2>
            <ComponentCarousel />
            <p className="body" style={{ marginTop: 12 }}>
              {`The first delivery consisted in 35 global components shipped. Two product squads in active redesigns became the first adopters. Support volume hit 92 requests in the first semester — each question a signal. We triaged weekly with the DS Tech Lead, closing documentation gaps and evolving components through a structured support channel.

Some components launched as Beta: production-ready, accessible, documented as evolving. Squads hit their deadlines. No permanent inconsistency was locked in.`}
            </p>
          </div>
          <div>
            <h2>Scale and legacy</h2>
            <Image
              className="figure"
              src="/assets/comparativo-pos-ds.png"
              alt="Five products after the design system"
              width={3212}
              height={1645}
            />
            <p className="body">
              {`Next step was to scale for all products teams, so they started using ECO DS actively. Support requests fell from 92 to 21 per semester as gaps closed and patterns stabilized. 100% of new product launches shipped on the system from day one. Cross products — Global Admin and Career Hub — launched entirely on ECO DS with no migration debt.

Reaching the legacy surface required a different approach. We sequenced redesigns in R&S's highest-traffic flows — job management, candidate pipeline — against the product roadmap to avoid generating engineering debt. Cursor integrated with Figma reduced handoff time by 60%, and reusable migration scripts made adoption partly automatable across codebases.`}
            </p>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="section-inner">
          <div className="eyebrow">Last Updates</div>
          <h2>Brand extension for AI components</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="figure figure-contain"
            src="/assets/chat-components.gif"
            alt="Chat components anatomy, IAGente prototype in R&S, and UX guidelines showing the four AI output types"
          />
          <p className="body" style={{ marginTop: 12 }}>
            {`When Gupy built IAGente — its AI agent layer starting in R&S — the chat interface it required didn't exist in the ECO DS. We extended the system rather than building outside it.

New gradient token families covered the AI surface (grad-ai-background-main, dark, card). AI-specific components — AIButton, AIAvatar, AIActionsList, AIToggleButton — extended ECO DS foundations rather than replacing them. The scope that grew furthest beyond components was the UX guidelines layer: four AI output types (directive, explanatory, visual/quantitative, interpretive), each with distinct UI treatment and documented design principles for the critical tensions between utility and user control, data and AI-generated insight.`}
          </p>
        </div>
        <div className="figure-wide-wrap">
          <Image
            className="figure figure-contain"
            src="/assets/chat-components-anatomy.png"
            alt="Chat components anatomy for the ECO Design System: Chat Header, Chat Input, Chat Body, Chat Message, AI Button, AI Toggle Button and AI Actions List, with their states and variants"
            width={1840}
            height={1047}
          />
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
