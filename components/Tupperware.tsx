import Image from "next/image";

const produtos = [
  { img: "/images/tupp_Potes_e_Recipientes.jpg",   title: "Potes & Recipientes",   desc: "Potes herméticos para conservar alimentos com praticidade e durabilidade incomparáveis." },
  { img: "/images/tupp_Garrafas_e_Copos.webp",     title: "Garrafas & Copos",       desc: "Garrafas e copos que mantêm sua bebida na temperatura ideal por muito mais tempo." },
  { img: "/images/tupp_Marmitas_e_Lancheiras.jpg", title: "Marmitas & Lancheiras",  desc: "Soluções práticas para o dia a dia, ideais para o trabalho, escola e viagens." },
  { img: "/images/tupp_Kits_e_Presentes.webp",     title: "Kits & Presentes",       desc: "Kits especiais para presentear com estilo. Produtos originais com garantia de qualidade." },
];

export default function Tupperware() {
  return (
    <section
      id="tupperware"
      style={{ padding: "6rem 0", background: "linear-gradient(135deg,#e8f5e9 0%,#f1f8e9 100%)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" as const, color: "#4caf50", marginBottom: "0.8rem" }}>
            <span style={{ width: 28, height: 1, background: "#c8e6c9", display: "inline-block" }} />
            Produtos para o Lar
            <span style={{ width: 28, height: 1, background: "#c8e6c9", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "#2e1a24" }}>
            Tupperware de <em style={{ fontStyle: "italic", color: "#388e3c" }}>qualidade</em>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
          {produtos.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#fff",
                border: "1.5px solid #c8e6c9",
                borderRadius: 18,
                padding: "2.2rem 1.5rem 2rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "all 0.35s",
              }}
            >
              <Image
                src={p.img} alt={p.title} width={64} height={64}
                style={{ objectFit: "cover", borderRadius: 12, margin: "0 auto 1.1rem", display: "block", width: 64, height: 64 }}
              />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 600, color: "#2e1a24", marginBottom: "0.4rem" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#9a7282", fontWeight: 300, lineHeight: 1.7 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
