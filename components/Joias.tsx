import Image from "next/image";

const joias = [
  { img: "/images/joia_Relogios.webp",   name: "Relógios",  badge: "Rommanel",   desc: "Elegância no pulso com qualidade e sofisticação garantidas." },
  { img: "/images/joia_Correntes.webp",  name: "Correntes", badge: "Acessórios", desc: "Correntes delicadas e modernas para compor o look perfeito." },
  { img: "/images/joia_Brincos.webp",    name: "Brincos",   badge: "Rommanel",   desc: "Variedade de modelos: argolas, pinos, pendentes e muito mais." },
  { img: "/images/joia_Pulseiras.webp",  name: "Pulseiras", badge: "Rommanel",   desc: "Pulseiras charmosas para todos os estilos e ocasiões especiais." },
];

export default function Joias() {
  return (
    <section
      id="joias"
      style={{
        padding: "6rem 0",
        background: "linear-gradient(150deg,#1e1118 0%,#2e1a24 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" as const, color: "#c9a84c", marginBottom: "0.8rem" }}>
            <span style={{ width: 28, height: 1, background: "rgba(201,168,76,0.3)", display: "inline-block" }} />
            Joias & Acessórios
            <span style={{ width: 28, height: 1, background: "rgba(201,168,76,0.3)", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "#fff" }}>
            Brilhe com <em style={{ fontStyle: "italic", color: "#c9a84c" }}>estilo</em>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
          {joias.map((j) => (
            <div
              key={j.name}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(201,168,76,0.18)",
                borderRadius: 18,
                padding: "2.2rem 1.5rem 2rem",
                textAlign: "center",
                cursor: "default",
                backdropFilter: "blur(8px)",
                transition: "all 0.35s",
              }}
            >
              <Image
                src={j.img} alt={j.name} width={90} height={90}
                style={{
                  objectFit: "cover", borderRadius: 14,
                  margin: "0 auto 1.1rem", display: "block",
                  border: "2px solid rgba(201,168,76,0.2)",
                }}
              />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>
                {j.name}
              </h3>
              <span style={{
                display: "inline-block", padding: "0.25rem 0.85rem",
                background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "100px", fontSize: "0.65rem", fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#f0e0b0",
                marginTop: "0.5rem",
              }}>
                {j.badge}
              </span>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginTop: "0.5rem", fontWeight: 300 }}>
                {j.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
