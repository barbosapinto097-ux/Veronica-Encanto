"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#perfumes",    label: "Perfumes" },
  { href: "#joias",       label: "Joias" },
  { href: "#sublimacao",  label: "Sublimação" },
  { href: "#manicure",    label: "Manicure" },
  { href: "#tupperware",  label: "Tupperware" },
  { href: "#contato",     label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1rem 5rem",
        background: "rgba(253,247,244,0.93)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(212,120,138,0.15)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.55rem",
          fontStyle: "italic",
          fontWeight: 600,
          color: "#2e1a24",
        }}
      >
        Verônica <span style={{ color: "#c9a84c" }}>Encanto</span>
      </div>

      <ul style={{ listStyle: "none", display: "flex", gap: "2.5rem" }}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                textDecoration: "none",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#9a7282",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4788a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9a7282")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
