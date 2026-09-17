import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Button from "@/components/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
];

// Hidden until the skills/percentages are reviewed.
const SHOW_SKILLS = false;

const services = [
  {
    title: "Product Design",
    description:
      "End-to-end product design for complex platforms, from discovery to shipping AI-powered features solo or in teams.",
    icon: (
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0zM20 3v4M22 5h-4M4 17v2M5 18H3" />
    ),
  },
  {
    title: "Design Ops and System",
    description:
      "Scaled a design system from 92 to 21 monthly requests across 5+ teams, cutting handoff time 60% via Cursor+Figma.",
    icon: (
      <>
        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
      </>
    ),
  },
  {
    title: "Design Leadership",
    description:
      "Led design teams through org restructuring, lifting team climate scores from 9.1 to 9.6, sustained for 6 months.",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Data and Research",
    description:
      "Ran AI-assisted card sorting with 19 stakeholders, delivering in 2 days what traditional methods take 3-4 weeks.",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
  },
];

const workItems = [
  {
    href: "/projetos/design-system",
    feature: { title: "ECO Design System", tag: "GUPY — DESIGN OPS" },
    heading: "Design system from scratch",
    tags: "Design Ops / Design System",
  },
  {
    href: "/projetos/design-chapter-gupy",
    feature: { title: "Structuring a Design Chapter at Gupy", tag: "GUPY" },
    heading: "Structuring a Design Chapter at Gupy",
    tags: "Design Ops / Team Structure",
    upcoming: true,
  },
  {
    href: "/projetos/ux-audits-redesign",
    feature: { title: "UX Audits and Multi-Product Redesign", tag: "GUPY" },
    heading: "UX Audits and multi-product redesign",
    tags: "UX Research / Product Design",
    upcoming: true,
  },
];

const skillColumns = [
  [
    { label: "Interaction Design", value: 60 },
    { label: "Usability Testing", value: 70 },
    { label: "User Research", value: 45 },
  ],
  [
    { label: "Figma", value: 95 },
    { label: "Prototyping", value: 80 },
    { label: "Information Architecture", value: 50 },
  ],
];

const sendIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="18"
    height="18"
  >
    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.11 1.11z" />
    <path d="m21.854 2.147-10.94 10.939" />
  </svg>
);

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-bg" style={{ width: 363, height: 363, left: 282, top: -315 }} />
        <div className="hero-bg" style={{ width: 363, height: 363, right: -114, top: 274 }} />
        <SiteNav theme="light" logoSrc="/assets/logo.svg" logoHref="/" links={navLinks} />
        <div className="hero-content wrap">
          <div className="hero-text">
            <span className="eyebrow">Product Design Manager | Staff</span>
            <h1>
              Hi There, I&apos;m
              <br />
              Bia Rodrigues
            </h1>
            <p className="sub">
              Welcome to my portfolio! Check out my work and get in touch
              with me.
            </p>
            <div className="hero-cta">
              <Button variant="primary" scrollTo="contact">
                Contact me
              </Button>
              <Button variant="secondary" scrollTo="work">
                Work
              </Button>
            </div>
          </div>
          <div className="hero-img">
            <Image
              src="/assets/hero-image.png"
              alt="Portrait of Bia Rodrigues, illustrated with UX lettering"
              width={1305}
              height={878}
            />
          </div>
        </div>
      </div>

      <section className="about" id="about">
        <div className="inner">
          <h2>About Me</h2>
          <p>
            Product design manager with ten years of experience across
            hands-on design, design ops, and multi-product platform
            leadership. Most recently at Gupy — an HR tech platform in Brazil
            — I led design across five post-acquisition products, built the
            company&apos;s design system from the ground up (starting with
            the ROI case that got it funded), and worked side by side with
            engineering and product leadership on decisions that actually
            shipped.
          </p>
        </div>
        <div className="about-bump" />
      </section>

      <section className="services" id="services">
        <div className="services-head">
          <h2>Services</h2>
          <p>
            Explore my design services, from user interface and experience to
            prototyping and testing. Let&apos;s craft exceptional digital
            experiences together.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title}>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {service.icon}
              </svg>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work" id="work" style={{ padding: 0 }}>
        <div className="work-head">
          <h2>Work</h2>
          <p>
            Check out my design projects. My experience ranges from
            end-to-end user experience delivery and structuring design teams
            to launching design systems from scratch.
          </p>
        </div>
        <div className="work-grid">
          {workItems.map((item) => (
            <Link key={item.heading} className="work-card" href={item.href}>
              <div className={`thumb-feature${item.upcoming ? " upcoming" : ""}`}>
                {item.upcoming && (
                  <span className="progress-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    In progress
                  </span>
                )}
                <strong>{item.feature.title}</strong>
                <span>{item.feature.tag}</span>
              </div>
              <div className="work-meta">
                <div>
                  <h4>{item.heading}</h4>
                  <span className="tag">{item.tags}</span>
                </div>
                <span className="arrow-btn">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {SHOW_SKILLS && (
        <section className="skills">
          <h2>Core Design Skills</h2>
          <p>
            I excel in essential design skills, creating visually stunning and
            functional digital experiences. From UI design to UX research, my
            passion is to craft effective and memorable digital solutions.
          </p>
          <div className="skills-grid">
            {skillColumns.map((column, i) => (
              <div key={i}>
                {column.map((skill) => (
                  <div key={skill.label}>
                    <div className="skill-row">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="contact" id="contact">
        <div className="hero-bg" style={{ width: 234, height: 234, left: -80, bottom: -100 }} />
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have any question or project in mind? I&apos;d love to hear from
            you.
          </p>
          <div className="row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            +55 12 98278 7767
          </div>
          <div className="row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            bia.vilasb@gmail.com
          </div>
          <div className="row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Sao Paulo, Brazil
          </div>
          <div className="social-row">
            <a
              href="https://www.instagram.com/biavlsb/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/beatrizvbsrodrigues/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <form className="contact-form">
          <input placeholder="First name" />
          <input placeholder="Email" type="email" />
          <input placeholder="Phone number" type="tel" />
          <textarea placeholder="Your message" />
          <Button variant="primary" iconRight={sendIcon} type="submit">
            Send message
          </Button>
        </form>
      </section>

      <SiteFooter aboutHref="#about" servicesHref="#services" workHref="#work" />
    </>
  );
}
