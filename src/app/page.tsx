import Link from "next/link";

const buildCards = [
  {
    label: "What I Build",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    items: ["Real-time web applications", "Mission-critical systems", "Mobile apps (Android)", "SaaS platforms", "Microservices architectures", "REST APIs & backends"],
  },
  {
    label: "Tech Stack",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    items: ["TypeScript · JavaScript · Python", "React · Next.js · Node.js", "MongoDB · PostgreSQL · MySQL", "Docker · Git · Express.js", "Microservices · Cloud Apps", "Keycloak · RESTful APIs"],
  },
  {
    label: "How I Work",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    items: ["Security-first mindset", "Clean, modular architecture", "High-pressure environments", "Team leadership & mentoring", "Critical thinking & ownership", "AI-assisted development"],
  },
];

const techSkills = [
  "TypeScript", "JavaScript", "Python", "Java", "C++",
  "React", "Next.js", "Node.js", "Express.js",
  "MongoDB", "PostgreSQL", "MySQL",
  "Docker", "Git", "Microservices", "RESTful APIs", "Keycloak", "Android",
];

export default function Home() {
  return (
    <>
      <div className="blob-bg" />
      <div className="blob-bottom" />

      <div className="relative z-10 w-full">

        {/* ── HERO — fills the viewport ──────────────────── */}
        <section
          className="w-full flex items-center justify-center"
          style={{ minHeight: "calc(100vh - 4rem)" }}
        >
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 py-16 flex flex-col items-center text-center gap-6">

            {/* Avatar */}
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold select-none mb-2"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(59,130,246,0.25))",
                border: "1px solid rgba(124,58,237,0.4)",
                color: "#a78bfa",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              MM
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--green)" }} />
              <span className="section-label" style={{ color: "var(--green)" }}>Open to opportunities</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Hey, I&apos;m{" "}
              <span className="gradient-text">Mohannad</span>
              <span style={{ color: "#a78bfa" }}>.</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium" style={{ color: "var(--muted-bright)" }}>
              A Software Developer{" "}
              <span className="gradient-text-warm">&amp; System Architect</span>
            </p>

            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
              3 years building scalable, secure, real-time systems — including mission-critical
              web &amp; mobile applications for the{" "}
              <span style={{ color: "var(--muted-bright)" }}>IDF C4I Sector</span>.
              Strong CS fundamentals from the{" "}
              <span style={{ color: "var(--muted-bright)" }}>Technion</span>.
              Open to full-time or part-time opportunities.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/projects" className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm">
                View Projects →
              </Link>
              <Link href="/resume" className="btn-outline px-6 py-3 rounded-xl font-semibold text-sm">
                Resume
              </Link>
              <a href="mailto:mohannad.milhem1201@gmail.com" className="btn-outline px-6 py-3 rounded-xl text-sm" style={{ color: "var(--muted-bright)" }}>
                Email me
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm" style={{ color: "var(--muted)" }}>
              <a href="https://www.linkedin.com/in/mohannad-milhem-a39710246" target="_blank" rel="noopener noreferrer" className="hover-accent flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <span style={{ color: "var(--border)" }}>·</span>
              <a href="tel:+972542341808" className="hover-accent">+972-54-234-1808</a>
              <span style={{ color: "var(--border)" }}>·</span>
              <span>Haifa, Israel</span>
            </div>

            {/* Scroll cue */}
            <div className="mt-4 flex flex-col items-center gap-1" style={{ color: "var(--muted)" }}>
              <span className="text-xs">scroll down</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── BUILDING DIGITAL EXPERIENCES ──── */}
        <section
          className="w-full py-20 sm:py-24"
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Expertise</p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Building <span className="gradient-text">Digital Experiences</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {buildCards.map(({ label, icon, items }) => (
                <div key={label} className="card p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.25)" }}
                  >
                    {icon}
                  </div>
                  <h3 className="font-semibold text-base mb-3" style={{ color: "var(--text)" }}>{label}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-bright)" }}>
                        <span style={{ color: "#a78bfa", fontSize: "0.4rem", flexShrink: 0 }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────── */}
        <section className="w-full py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Background</p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Work <span className="gradient-text">Experience</span>
              </h2>
            </div>

            <div className="space-y-5">
              {/* IDF */}
              <div className="card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-bold">Software Development Team</h3>
                      <span className="tag">Military</span>
                    </div>
                    <p className="font-mono text-sm" style={{ color: "#a78bfa" }}>IDF — C4I Sector</p>
                  </div>
                  <span className="tag-green shrink-0 self-start">2020 – 2022 · 3 yrs</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Real-Time Monitoring & Response",
                      bullets: ["Led development of a real-time military web app for field data monitoring", "Custom bot for emergency push notifications on critical events", "Microservices architecture for scalable data handling"],
                      tech: ["JavaScript", "Python", "MongoDB", "Microservices"],
                    },
                    {
                      title: "Border Proximity Warning System",
                      bullets: ["Android app for real-time soldier location tracking and proximity alerts", "Integrated third-party tooling for coordinate distance calculation"],
                      tech: ["Android"],
                    },
                    {
                      title: "Internal Task Management",
                      bullets: ["Secure Jira-like SaaS for military task tracking and collaboration", "Hierarchical unit structure with dedicated cloud locations", "Ticket system for soldiers to open issues and leaders to resolve"],
                      tech: ["React", "Node.js", "MongoDB"],
                    },
                  ].map(({ title, bullets, tech }) => (
                    <div key={title} className="rounded-xl p-4" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                      <p className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>{title}</p>
                      <ul className="space-y-2 mb-3">
                        {bullets.map((b, i) => (
                          <li key={i} className="flex gap-2 text-xs" style={{ color: "var(--muted-bright)" }}>
                            <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: "2px" }}>▸</span>{b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        {tech.map((t) => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs italic" style={{ color: "var(--muted)" }}>🔒 Source code confidential — military security restrictions.</p>
              </div>

              {/* Meetarim */}
              <div className="card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1">Instructor &amp; Instructional Coordinator</h3>
                    <p className="font-mono text-sm" style={{ color: "#a78bfa" }}>Meetarim</p>
                  </div>
                  <span className="tag-orange shrink-0 self-start">2023 – Present</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Developed and taught courses covering CS principles, algorithms, Micro:bit programming, and Python.",
                    "Coached instructors on effective teaching, leading to a 40% increase in positive feedback and student registration.",
                    "Fostered student enthusiasm for technology through project-based learning.",
                  ].map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--muted-bright)" }}>
                      <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: "2px" }}>▸</span>{b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mt-3">
                  {["Python", "Micro:bit", "Algorithms"].map((t) => <span key={t} className="tag-orange">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TECH STACK ───────────────────── */}
        <section
          className="w-full py-20 sm:py-24"
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-10">
              <p className="section-label mb-3">Technologies</p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Tech <span className="gradient-text">Stack</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {techSkills.map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-xl text-sm font-mono"
                  style={{ background: "var(--surface-2)", color: "var(--muted-bright)", border: "1px solid var(--border)" }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ──────────────────── */}
        <section className="w-full py-20 sm:py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
            <p className="section-label mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bringing your ideas to life.{" "}
              <span className="gradient-text">Let&apos;s turn your vision into reality.</span>
            </h2>
            <p className="mb-8 text-base" style={{ color: "var(--muted)" }}>
              Open to full-time, part-time, and freelance opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:mohannad.milhem1201@gmail.com" className="btn-primary px-7 py-3 rounded-xl font-semibold text-sm">
                Send an Email
              </a>
              <a href="https://www.linkedin.com/in/mohannad-milhem-a39710246" target="_blank" rel="noopener noreferrer" className="btn-outline px-7 py-3 rounded-xl font-semibold text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
