export default function Footer() {
  return (
    <footer
      style={{
        background: "#120d10",
        padding: "2rem 5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontStyle: "italic", fontWeight: 600, color: "#f5d0d8" }}>
        Verônica <span style={{ color: "#c9a84c" }}>Encanto</span>
      </div>
      <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>
        © 2025 Verônica Encanto · Todos os direitos reservados
      </p>
      <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>
        Feito com 💗 para você
      </p>
    </footer>
  );
}
