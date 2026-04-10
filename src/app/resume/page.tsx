export default function ResumePage() {
  return (
    <>
      <div className="blob-bg" />
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-16">

          {/* Page header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-12 pt-4">
            <div>
              <p className="section-label mb-2">Overview</p>
              <h1 className="text-3xl sm:text-4xl font-bold">
                My <span className="gradient-text">Resume</span>
              </h1>
            </div>
            <a
              href="/resume/MohannadMilhem26.pdf"
              download
              className="btn-primary px-5 py-3 rounded-xl font-semibold text-sm self-start"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>

          {/* Resume card */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>

            {/* Contact */}
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-1">Mohannad Milhem</h2>
              <p className="font-mono text-sm mb-4" style={{ color: "#a78bfa" }}>Software Developer</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a href="mailto:mohannad.milhem1201@gmail.com" className="hover-fg flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  mohannad.milhem1201@gmail.com
                </a>
                <a href="tel:+972542341808" className="hover-fg flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.05 2 2 0 0 1 3.59 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 18v.92z"/></svg>
                  +972-54-234-1808
                </a>
                <a
                  href="https://www.linkedin.com/in/mohannad-milhem-a39710246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-fg flex items-center gap-1.5"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <span className="flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Haifa, Israel
                </span>
              </div>
            </div>

            <RDivider />

            {/* Objective */}
            <div className="p-6 sm:p-8">
              <SectionTitle>Objective</SectionTitle>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-bright)" }}>
                Software Developer with 3 years of experience building scalable, secure, real-time systems —
                including mission-critical web and mobile applications developed during military service in the IDF.
                Backed by strong computer science fundamentals from the{" "}
                <span style={{ color: "var(--text)" }}>Technion</span>, with hands-on expertise across the stack
                and a passion for clean code and solving real-world problems. Open to full-time or part-time
                opportunities.
              </p>
            </div>

            <RDivider />

            {/* Experience */}
            <div className="p-6 sm:p-8">
              <SectionTitle>Experience</SectionTitle>
              <div className="space-y-8">
                <ResumeJob
                  role="Software Development Team"
                  company="IDF — C4I Sector"
                  period="2020 – 2022 · 3 years"
                  bullets={[
                    "Led development of a real-time military web app for field data monitoring and rapid response.",
                    "Built a custom bot to send emergency push notifications based on critical events.",
                    "Designed and implemented microservices architecture for scalable data handling.",
                    "Developed an Android app to track real-time soldier locations and send border proximity alerts.",
                    "Built a secure Jira-like SaaS app with hierarchical unit structure and dedicated cloud locations.",
                  ]}
                  tech={["JavaScript", "Python", "Android", "React", "Node.js", "MongoDB", "Microservices"]}
                  note="Source code confidential — military security restrictions."
                />
                <ResumeJob
                  role="Instructor & Instructional Coordinator"
                  company="Meetarim"
                  period="2023 – Present"
                  bullets={[
                    "Developed and taught courses on CS principles, algorithms, Micro:bit programming, and Python.",
                    "Coached instructors on effective teaching, leading to a 40% increase in positive feedback and student registration.",
                    "Fostered student enthusiasm for technology through project-based learning.",
                  ]}
                  tech={["Python", "Micro:bit", "Algorithms"]}
                />
              </div>
            </div>

            <RDivider />

            {/* Education */}
            <div className="p-6 sm:p-8">
              <SectionTitle>Education</SectionTitle>
              <div className="mb-4">
                <p className="font-semibold">Technion — Israel Institute of Technology</p>
                <p className="text-sm mt-1" style={{ color: "var(--muted-bright)" }}>
                  Completed a rigorous selection of core computer science coursework at one of the world&apos;s
                  leading technical universities, building a strong theoretical and practical foundation in software
                  engineering.
                </p>
              </div>
              <p className="text-xs font-mono font-semibold mb-2" style={{ color: "#a78bfa" }}>Courses completed include:</p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Algorithms & Data Structures",
                  "Object-Oriented Programming (OOP)",
                  "Computer Networking",
                  "Operating Systems",
                  "Computer Architecture",
                ].map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--muted-bright)" }}>
                    <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: "2px" }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-mono font-semibold mb-2" style={{ color: "#a78bfa" }}>1-Year Capstone Project:</p>
              <ul className="space-y-1.5 mb-3">
                {[
                  "Led a team to build a secure, scalable mentorship platform connecting community researchers with Technion professors.",
                  "Built a React dashboard with Microsoft SMTP email integration.",
                  "Implemented Keycloak-based authentication (OAuth 2.0 / OIDC).",
                ].map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--muted-bright)" }}>
                    <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: "2px" }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {["JavaScript", "React", "Microsoft SMTP", "Keycloak"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <RDivider />

            {/* Skills */}
            <div className="p-6 sm:p-8">
              <SectionTitle>Technical Skills</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Technologies",       value: "Microservices, Cloud Applications, RESTful APIs" },
                  { label: "Languages",           value: "TypeScript, Python, Java, C++" },
                  { label: "Databases",           value: "MongoDB, SQL, PostgreSQL, MySQL" },
                  { label: "Frameworks & Tools",  value: "Node.js, React, Next.js, Git, Docker, Express.js" },
                  { label: "AI-Assisted Development", value: "Leverage Claude, GitHub Copilot, and ChatGPT to accelerate development workflows, improve code quality, and solve complex problems more efficiently." },
                  { label: "Soft Skills",         value: "Leadership, Collaboration, Critical Thinking, Adaptability, Mentoring" },
                  { label: "Spoken Languages",    value: "English (Fluent), Hebrew (Fluent), Arabic (Mother tongue)" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl p-3 sm:p-4"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                  >
                    <p className="text-xs font-mono font-semibold mb-1" style={{ color: "#a78bfa" }}>{label}</p>
                    <p className="text-sm" style={{ color: "var(--muted-bright)" }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

function RDivider() {
  return <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: 0 }} />;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="section-label mb-4 sm:mb-5 pb-2.5 block"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {children}
    </h2>
  );
}

function ResumeJob({
  role, company, period, bullets, tech, note,
}: {
  role: string; company: string; period: string;
  bullets: string[]; tech: string[]; note?: string;
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <p className="font-semibold">{role}</p>
          <p className="text-sm font-mono" style={{ color: "#a78bfa" }}>{company}</p>
        </div>
        <span className="tag-green self-start shrink-0">{period}</span>
      </div>

      <ul className="space-y-1.5 mb-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--muted-bright)" }}>
            <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: "2px" }}>▸</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {tech.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      {note && <p className="mt-2 text-xs italic" style={{ color: "var(--muted)" }}>🔒 {note}</p>}
    </div>
  );
}
