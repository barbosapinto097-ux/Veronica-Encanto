"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#perfumes",   label: "Perfumes" },
  { href: "#joias",      label: "Joias" },
  { href: "#sublimacao", label: "Sublimação" },
  { href: "#manicure",   label: "Manicure" },
  { href: "#tupperware", label: "Tupperware" },
  { href: "#contato",    label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .ve-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          display: flex; justify-content: space-between; align-items: center;
          padding: 0 4rem; height: 64px;
          background: rgba(253,247,244,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(212,120,138,0.15);
          transition: box-shadow 0.3s;
        }
        .ve-nav.scrolled { box-shadow: 0 4px 24px rgba(0,0,0,0.08); }

        .ve-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-style: italic; font-weight: 600;
          color: #2e1a24; white-space: nowrap; text-decoration: none;
          flex-shrink: 0;
        }
        .ve-logo span { color: #c9a84c; }

        /* Links desktop */
        .ve-links {
          display: flex; list-style: none; gap: 2rem;
          margin: 0; padding: 0;
        }
        .ve-links a {
          text-decoration: none; font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.13em; text-transform: uppercase; color: #9a7282;
          transition: color 0.25s; white-space: nowrap;
        }
        .ve-links a:hover { color: #d4788a; }

        /* Botão hambúrguer */
        .ve-burger {
          display: none;
          flex-direction: column; justify-content: center; align-items: center;
          gap: 5px; width: 40px; height: 40px;
          background: none; border: none; cursor: pointer;
          padding: 0; border-radius: 8px; flex-shrink: 0;
          transition: background 0.2s;
        }
        .ve-burger:hover { background: rgba(212,120,138,0.1); }
        .ve-burger-line {
          display: block; width: 22px; height: 2px;
          background: #2e1a24; border-radius: 2px;
          transform-origin: center;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
        }
        /* Animação X */
        .ve-burger.open .ve-burger-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .ve-burger.open .ve-burger-line:nth-child(2) { opacity: 0; width: 0; }
        .ve-burger.open .ve-burger-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Overlay escuro */
        .ve-overlay {
          display: none; position: fixed; inset: 0; z-index: 998;
          background: rgba(30,17,24,0.45);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          opacity: 0; transition: opacity 0.3s;
        }
        .ve-overlay.open { display: block; opacity: 1; }

        /* Menu mobile drawer */
        .ve-drawer {
          display: none; position: fixed;
          top: 64px; left: 0; right: 0; z-index: 999;
          background: #fdf7f4;
          border-bottom: 1px solid rgba(212,120,138,0.2);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          transform: translateY(-8px);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
          pointer-events: none;
        }
        .ve-drawer.open {
          display: block; transform: translateY(0);
          opacity: 1; pointer-events: auto;
        }
        .ve-drawer-inner { padding: 0.5rem 0 1rem; }
        .ve-drawer a {
          display: flex; align-items: center;
          padding: 1rem 1.5rem; text-decoration: none;
          font-size: 0.88rem; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: #2e1a24;
          border-bottom: 1px solid rgba(212,120,138,0.08);
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
          gap: 0.6rem;
        }
        .ve-drawer a::before {
          content: ''; display: inline-block;
          width: 4px; height: 4px; border-radius: 50%;
          background: #d4788a; flex-shrink: 0;
          opacity: 0; transition: opacity 0.2s;
        }
        .ve-drawer a:hover { color: #d4788a; padding-left: 1.8rem; background: rgba(212,120,138,0.04); }
        .ve-drawer a:hover::before { opacity: 1; }
        .ve-drawer a:last-child { border-bottom: none; }

        @media (max-width: 768px) {
          .ve-nav { padding: 0 1.25rem; }
          .ve-links { display: none; }
          .ve-burger { display: flex; }
        }

        @media (max-width: 380px) {
          .ve-logo { font-size: 1.2rem; }
        }
      `}</style>

      <nav className={`ve-nav${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="ve-logo">
          Verônica <span>Encanto</span>
        </a>

        <ul className="ve-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className={`ve-burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className="ve-burger-line" />
          <span className="ve-burger-line" />
          <span className="ve-burger-line" />
        </button>
      </nav>

      {/* Overlay clicável para fechar */}
      <div
        className={`ve-overlay${menuOpen ? " open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer mobile */}
      <div className={`ve-drawer${menuOpen ? " open" : ""}`} role="dialog" aria-label="Menu de navegação">
        <div className="ve-drawer-inner">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
