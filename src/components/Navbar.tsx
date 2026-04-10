"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(6,8,15,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-lg font-bold tracking-tight flex-shrink-0">
          <span className="gradient-text">MM</span>
          <span style={{ color: "var(--muted)" }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    color: active ? "#a78bfa" : "var(--muted-bright)",
                    background: active ? "rgba(124,58,237,0.1)" : "transparent",
                    border: active ? "1px solid rgba(124,58,237,0.2)" : "1px solid transparent",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 rounded transition-all"
            style={{
              background: "var(--muted-bright)",
              transform: open ? "rotate(45deg) translate(2px, 2px)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 rounded transition-all"
            style={{
              background: "var(--muted-bright)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 rounded transition-all"
            style={{
              background: "var(--muted-bright)",
              transform: open ? "rotate(-45deg) translate(2px, -2px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="sm:hidden px-4 pb-4 flex flex-col gap-1"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-all"
                style={{
                  color: active ? "#a78bfa" : "var(--muted-bright)",
                  background: active ? "rgba(124,58,237,0.1)" : "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
