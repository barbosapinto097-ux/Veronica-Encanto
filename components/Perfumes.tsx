import Image from "next/image";

const brands = [
  { img: "/images/pill_Natura.webp",      label: "Natura" },
  { img: "/images/pill_Avon.webp",         label: "Avon" },
  { img: "/images/pill_Blossom_Ville.webp",label: "Blossom Ville" },
  { img: "/images/pill_O_Boticario.png",   label: "O Boticário" },
];

const cards = [
  { img: "/images/perf_Natura.webp",       name: "Natura",      desc: "Fragrâncias naturais com ingredientes da biodiversidade brasileira. Sofisticação com propósito." },
  { img: "/images/perf_Avon.webp",          name: "Avon",        desc: "Clássicos inesquecíveis e lançamentos modernos para todos os estilos e personalidades." },
  { img: "/images/perf_Blossom_Ville.webp", name: "Blossom Ville",desc: "Aromas florais e delicados que evocam elegância e feminilidade a cada spray." },
  { img: "/images/perf_O_Boticario.png",    name: "O Boticário", desc: "Uma das maiores marcas de perfumaria do Brasil, com fragrâncias sofisticadas para todos os momentos." },
];

export default function Perfumes() {
  return (
    <section id="perfumes" style={{ padding: "6rem 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" as const, color: "#d4788a", marginBottom: "0.8rem" }}>
            <span style={{ width: 28, height: 1, background: "#f5d0d8", display: "inline-block" }} />
            Fragrâncias
            <span style={{ width: 28, height: 1, background: "#f5d0d8", display: "inline-block" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "#2e1a24" }}>
            Perfumes que <em style={{ fontStyle: "italic", color: "#d4788a" }}>encantam</em>
          </h2>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3.5rem" }}>
          {brands.map((b) => (
            <div
              key={b.label}
              style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                padding: "0.65rem 1.6rem",
                border: "1.5px solid rgba(212,120,138,0.15)",
                borderRadius: "100px",
                background: "#fdf7f4",
                fontSize: "0.85rem", fontWeight: 500, color: "#2e1a24",
                cursor: "default",
                transition: "all 0.3s",
              }}
            >
              <Image src={b.img} alt={b.label} width={26} height={26} style={{ objectFit: "contain", borderRadius: 6 }} />
              {b.label}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
          {cards.map((c) => (
            <div
              key={c.name}
              style={{
                background: "#fdf7f4",
                border: "1.5px solid rgba(212,120,138,0.15)",
                borderRadius: 18,
                padding: "2.2rem 1.5rem 2rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "all 0.35s",
              }}
            >
              <Image src={c.img} alt={c.name} width={80} height={80}
                style={{ objectFit: "contain", borderRadius: 14, margin: "0 auto 1.1rem", display: "block" }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "#2e1a24", marginBottom: "0.4rem" }}>
                {c.name}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#9a7282", fontWeight: 300, lineHeight: 1.7 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
