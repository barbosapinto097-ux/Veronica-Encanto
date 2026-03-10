import Image from "next/image";

const heroCards = [
  {
    type: "logos",
    logos: [
      "/images/hero_logo_0.webp",
      "/images/hero_logo_1.webp",
      "/images/hero_logo_2.webp",
      "/images/hero_logo_3.png",
    ],
    title: "Perfumes",
    sub: "4 marcas exclusivas",
  },
  {
    type: "img",
    img: "/images/hero_Relogios.webp",
    title: "Relógios",
    sub: "Rommanel",
    offset: true,
  },
  {
    type: "img",
    img: "/images/hero_Manicure.jpg",
    title: "Manicure",
    sub: "Cuidado & estilo",
  },
  {
    type: "img",
    img: "/images/hero_Personalizados.jpg",
    title: "Personalizados",
    sub: "Xícaras & garrafas",
  },
  {
    type: "img",
    img: "/images/hero_Tupperware.jpg",
    title: "Tupperware",
    sub: "Produtos para o lar",
    offset: true,
  },
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#fce4ec 0%,#f8bbd0 50%,#f48fb1 100%)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* radial glow */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 30% 50%,rgba(255,255,255,0.3) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* LEFT */}
      <div
        style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "9rem 4rem 6rem 6rem", position: "relative", zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex", alignItems: "center", gap: "0.8rem",
            fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.28em",
            textTransform: "uppercase", color: "#9b3a5a", marginBottom: "1.6rem",
          }}
        >
          <span style={{ width: 36, height: 1, background: "#9b3a5a", display: "inline-block" }} />
          ✦ Beleza & Estilo
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 5.5vw, 5rem)",
            lineHeight: 1.08,
            color: "#2e1a24",
          }}
        >
          Tudo que você<br />
          <em style={{ fontStyle: "italic", color: "#9b3a5a", display: "block" }}>
            precisa para
          </em>
          se sentir linda
        </h1>

        <p
          style={{
            marginTop: "1.8rem", fontSize: "0.95rem", fontWeight: 300,
            lineHeight: 1.85, color: "rgba(46,26,36,0.65)", maxWidth: 400,
          }}
        >
          Perfumes, joias, relógios, presentes personalizados e cuidados com as mãos — tudo em um só lugar, com o carinho que você merece.
        </p>

        <div style={{ marginTop: "2.8rem" }}>
          <a
            href="#contato"
            style={{
              display: "inline-flex", alignItems: "center",
              background: "linear-gradient(135deg,#d4788a,#b05068)",
              color: "#fff", padding: "0.9rem 2rem", borderRadius: "100px",
              fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none",
              boxShadow: "0 6px 24px rgba(212,120,138,0.35)",
              transition: "all 0.3s",
            }}
          >
            Fale Comigo
          </a>
        </div>
      </div>

      {/* RIGHT — cards grid */}
      <div
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "5rem 5rem 5rem 2rem", position: "relative", zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "1.4rem", width: "100%", maxWidth: 440,
          }}
        >
          {heroCards.map((card, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(155,58,90,0.15)",
                borderRadius: 18,
                padding: "2rem 1.5rem",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 20px rgba(155,58,90,0.1)",
                marginTop: i === 1 ? "1.8rem" : i === 4 ? "0" : undefined,
                transition: "all 0.35s",
              }}
            >
              {card.type === "logos" && card.logos ? (
                <div style={{ display: "flex", gap: 4, justifyContent: "center", marginBottom: "0.9rem", flexWrap: "wrap" }}>
                  {card.logos.map((src, j) => (
                    <Image key={j} src={src} alt="" width={32} height={32}
                      style={{ objectFit: "contain", borderRadius: 7, width: 32, height: 32 }} />
                  ))}
                </div>
              ) : (
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.9rem" }}>
                  <Image src={card.img!} alt={card.title} width={70} height={70}
                    style={{ objectFit: "cover", borderRadius: 14, width: 70, height: 70 }} />
                </div>
              )}
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem", fontWeight: 600, color: "#2e1a24",
                }}
              >
                {card.title}
              </h4>
              <p style={{ fontSize: "0.7rem", color: "#9a7282", marginTop: "0.2rem", fontWeight: 300 }}>
                {card.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
