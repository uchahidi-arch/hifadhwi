"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/a-propos", label: "Notre mission" },
  { href: "/nos-actions", label: "Nos actions" },
  { href: "/actualites", label: "Actualités" },
  { href: "/ressources", label: "Urgence" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0.6rem 3.5rem",
      background: "rgba(250, 244, 240, 0.92)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      transition: "box-shadow 0.3s ease",
      boxShadow: scrolled ? "0 2px 20px rgba(109, 46, 70, 0.08)" : "none",
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
        <Image src="/logo.png" alt="HIFADHWI" width={38} height={38} style={{ objectFit: "contain" }} />
        <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--primary)", letterSpacing: "0.08em" }}>
          HIFADHWI
        </span>
      </Link>

      <ul className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "2.2rem", listStyle: "none" }}>
        {links.map(l => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="nav-link">{l.label}</Link>
          </li>
        ))}
        <li>
          <Link href="/nous-soutenir" className="nav-cta-btn">Soutenir</Link>
        </li>
      </ul>

      <button
        onClick={() => setOpen(!open)}
        className="mobile-menu-btn"
        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--dark)", padding: 4 }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(250, 244, 240, 0.98)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid var(--border)",
          padding: "1rem 3.5rem 2rem",
        }}>
          {[...links, { href: "/nous-soutenir", label: "Nous soutenir" }].map(l => (
            <Link
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "0.75rem 0",
                color: "var(--dark-mid)", textDecoration: "none",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600, fontSize: "0.88rem",
                borderBottom: "1px solid var(--border)",
                letterSpacing: "0.04em", textTransform: "uppercase",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-link {
          font-family: 'Nunito', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--dark-mid);
          text-decoration: none;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          position: relative;
          transition: color 0.25s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 1.5px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: var(--primary); }
        .nav-link:hover::after { width: 100%; }
        .nav-cta-btn {
          font-family: 'Nunito', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--cream) !important;
          background: var(--primary);
          padding: 0.55rem 1.4rem;
          border-radius: 2px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: background 0.25s ease;
          text-decoration: none;
          display: inline-block;
        }
        .nav-cta-btn:hover { background: var(--dark); }
        @media (max-width: 900px) { .nav-links-desktop { display: none !important; } }
        @media (min-width: 901px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </nav>
  );
}
