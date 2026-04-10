export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-mono font-bold text-sm">
            <span className="gradient-text">MM</span>
            <span style={{ color: "var(--muted)" }}>.</span>
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Mohannad Milhem
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/mohannad-milhem-a39710246"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-accent text-sm"
          >
            LinkedIn
          </a>
          <a href="mailto:mohannad.milhem1201@gmail.com" className="hover-accent text-sm">
            Email
          </a>
          <a href="tel:+972542341808" className="hover-accent text-sm">
            +972-54-234-1808
          </a>
        </div>
      </div>
    </footer>
  );
}
