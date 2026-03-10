import Image from "next/image";

const servicos = [
  { img: "/images/mani_Esmaltacao_Simples.jpg", title: "Esmaltação Simples", desc: "Esmaltação clássica com acabamento impecável. Cores vibrantes ou suaves para o seu estilo do dia." },
  { img: "/images/mani_Esmaltacao_em_Gel.jpg",  title: "Esmaltação em Gel",  desc: "Durabilidade e brilho que duram semanas. Acabamento profissional com gel de alta qualidade." },
  { img: "/images/mani_Manicure_Completa.jpg",   title: "Manicure Completa",  desc: "Cutículas, lixamento, hidratação e esmaltação. Cuidado completo para suas mãos merecerem." },
];

export default function Manicure() {
  return (
    <section
      id="manicure"
      style={{ padding: "6rem 0", background: "linear-gradient(135deg,#fdf0f3 0%,#fdf8ee 100%)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" as const, color: "#d4788a", marginBottom: "0.8rem" }}>
            <span style={{ width: 28, height: 1, background: "#f5d0d8", display: "inline-block" }} />
            Cuidados
            <span style={{ width: 28, height: 1, background: "#f5d0d8", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "#2e1a24" }}>
            Manicure com <em style={{ fontStyle: "italic", color: "#d4788a" }}>capricho</em>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
          {servicos.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#fff",
                border: "1.5px solid rgba(212,120,138,0.15)",
                borderRadius: 18,
                overflow: "hidden",
                cursor: "default",
                transition: "all 0.35s",
              }}
            >
              <Image
                src={s.img} alt={s.title} width={400} height={160}
                style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "1.5rem 1.5rem 1.8rem" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 600, color: "#2e1a24", marginBottom: "0.4rem" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#9a7282", fontWeight: 300, lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
