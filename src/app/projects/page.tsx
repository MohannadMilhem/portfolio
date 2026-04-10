const projects = [
  {
    title: "Military Real-Time Monitoring & Response System",
    org: "IDF — C4I Sector",
    period: "2020 – 2022",
    description:
      "A real-time web application for field data monitoring and rapid response. Decision-makers visualized live operational data from multiple sources and received instant push alerts on critical events.",
    details: [
      "Led full development of the real-time monitoring web app.",
      "Built a custom bot for emergency push notifications based on critical events.",
      "Designed microservices architecture for scalable, efficient data handling.",
    ],
    tech: ["JavaScript", "Python", "MongoDB", "Microservices"],
    repo: null,
    repoNote: "Confidential — military restrictions",
    category: "Real-Time Systems",
    confidential: true,
  },
  {
    title: "Border Proximity Warning System",
    org: "IDF — C4I Sector",
    period: "2020 – 2022",
    description:
      "An Android mobile application that tracks real-time soldier locations and triggers proximity alerts when approaching border or restricted areas, with automated supervisor notifications.",
    details: [
      "Developed Android app for real-time soldier location tracking.",
      "Integrated third-party tooling for efficient coordinate distance calculation.",
      "Automated proximity alerts to commanders for incident response.",
    ],
    tech: ["Android", "Geolocation"],
    repo: null,
    repoNote: "Confidential — military restrictions",
    category: "Mobile",
    confidential: true,
  },
  {
    title: "Internal Military Task Management System",
    org: "IDF — C4I Sector",
    period: "2020 – 2022",
    description:
      "A secure, Jira-like SaaS application for military task tracking and collaboration. Supports hierarchical org structure with isolated cloud deployments per unit.",
    details: [
      "Full-featured ticket and task management system for military use.",
      "Hierarchical unit structure with dedicated cloud locations per organization.",
      "Soldiers open tickets, leaders manage and resolve them with full audit trail.",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    repo: null,
    repoNote: "Confidential — military restrictions",
    category: "SaaS",
    confidential: true,
  },
  {
    title: "Mentorship Platform",
    org: "Technion — 1-Year Project",
    period: "Academic",
    description:
      "A secure, scalable web application connecting community researchers with Technion professors for academic mentorship. Led the team to design and deliver the full platform.",
    details: [
      "Led team to build web app connecting researchers with Technion professors.",
      "Built React dashboard with integrated email communication via Microsoft SMTP.",
      "Implemented secure access and identity management using Keycloak (OAuth 2.0).",
    ],
    tech: ["JavaScript", "React", "Node.js", "Keycloak", "Microsoft SMTP"],
    repo: null,
    repoNote: "Private academic repository",
    category: "Full-Stack",
    confidential: false,
  },
];

const catStyle: Record<string, string> = {
  "Real-Time Systems": "tag",
  "Mobile":            "tag-orange",
  "SaaS":              "tag-blue",
  "Full-Stack":        "tag-green",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="blob-bg" />
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-14">
            <p className="section-label mb-3">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
              Systems I&apos;ve designed and shipped — from military-grade real-time infrastructure
              to academic full-stack applications.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {projects.map((project, i) => (
              <article key={i} className="card flex flex-col">
                <div className="p-5 sm:p-6 flex-1">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h2 className="text-base font-bold leading-snug" style={{ color: "var(--text)" }}>
                      {project.title}
                    </h2>
                    <span className={catStyle[project.category]}>{project.category}</span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <p className="text-xs font-mono" style={{ color: "#a78bfa" }}>{project.org}</p>
                    <span style={{ color: "var(--border)" }}>·</span>
                    <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>{project.period}</p>
                    {project.confidential && (
                      <>
                        <span style={{ color: "var(--border)" }}>·</span>
                        <span className="text-xs" style={{ color: "var(--muted)" }}>🔒 Confidential</span>
                      </>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-bright)" }}>
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {project.details.map((d, j) => (
                      <li key={j} className="flex gap-2 text-sm" style={{ color: "var(--muted)" }}>
                        <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: "2px" }}>▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="px-5 sm:px-6 py-4 flex items-center justify-between gap-3"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "var(--green)" }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--green)" }} />
                    Deployed
                  </span>

                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium hover-accent"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                      GitHub
                    </a>
                  ) : (
                    <span className="text-xs italic" style={{ color: "var(--muted)" }}>{project.repoNote}</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Confidential note */}
          <div
            className="mt-8 sm:mt-10 rounded-xl p-4 sm:p-5 flex gap-3"
            style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.18)" }}
          >
            <span className="text-lg shrink-0">ℹ️</span>
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: "#a78bfa" }}>About Confidential Projects</p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                Several projects were built during mandatory military service in the IDF&apos;s C4I sector.
                Source code cannot be shared due to operational security restrictions.
                I&apos;m happy to discuss architecture, design decisions, and technical challenges in detail.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
