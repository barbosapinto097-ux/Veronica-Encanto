export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #120d10;
          padding: 1.8rem 4rem;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 0.8rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .f-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-style: italic; font-weight: 600; color: #f5d0d8; }
        .f-logo span { color: #c9a84c; }
        .footer p { font-size: 0.72rem; color: rgba(255,255,255,0.3); font-weight: 300; }

        @media (max-width: 600px) {
          .footer { padding: 1.5rem 1rem; flex-direction: column; text-align: center; gap: 0.5rem; }
        }
      `}</style>
      <footer className="footer">
        <div className="f-logo">Verônica <span>Encanto</span></div>
        <p>© 2025 Verônica Encanto · Todos os direitos reservados</p>
        <p>Feito com 💗 para você</p>
      </footer>
    </>
  );
}
