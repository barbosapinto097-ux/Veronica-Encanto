import Image from "next/image";

const items = [
  { img: "/images/sub_Xicaras.jpg",     title: "Xícaras Personalizadas", desc: "Crie a xícara dos seus sonhos com fotos, mensagens e nomes. Perfeitas para presentear com afeto." },
  { img: "/images/sub_Garrafas.jpg",    title: "Garrafas Térmicas",       desc: "Garrafas térmicas personalizadas com sua identidade visual ou imagem preferida. Presente que impressiona todo dia." },
  { img: "/images/sub_Encomendas.jpg",  title: "Encomendas Especiais",    desc: "Aniversários, casamentos, datas comemorativas — o presente ideal para cada ocasião especial." },
];

export default function Sublimacao() {
  return (
    <section id="sublimacao" style={{ padding: "6rem 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" as const, color: "#d4788a", marginBottom: "0.8rem" }}>
            <span style={{ width: 28, height: 1, background: "#f5d0d8", display: "inline-block" }} />
            Presentes Únicos
            <span style={{ width: 28, height: 1, background: "#f5d0d8", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "#2e1a24" }}>
            Sublimação <em style={{ fontStyle: "italic", color: "#d4788a" }}>personalizada</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Circle image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 320, height: 320, borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #f5d0d8",
              boxShadow: "0 0 0 12px #fdf0f3, 0 16px 60px rgba(212,120,138,0.18)",
              animation: "float 5s ease-in-out infinite",
              flexShrink: 0,
            }}>
              <Image src="/images/sub_circle.jpg" alt="Sublimação" width={320} height={320}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          {/* Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {items.map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex", gap: "1.2rem", alignItems: "center",
                  padding: "1.4rem 1.5rem", borderRadius: 18,
                  border: "1.5px solid transparent",
                  background: "#fdf7f4",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
              >
                <div style={{
                  width: 64, height: 64, flexShrink: 0,
                  borderRadius: 14, overflow: "hidden",
                  border: "2px solid rgba(212,120,138,0.15)",
                  boxShadow: "0 4px 16px rgba(212,120,138,0.15)",
                }}>
                  <Image src={item.img} alt={item.title} width={64} height={64}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600, color: "#2e1a24", marginBottom: "0.3rem" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "#9a7282", fontWeight: 300, lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }`}</style>
    </section>
  );
}
