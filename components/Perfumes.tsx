import Image from "next/image";

const brands = [
  { img: "/images/pill_Natura.webp",       label: "Natura" },
  { img: "/images/pill_Avon.webp",          label: "Avon" },
  { img: "/images/pill_Blossom_Ville.webp", label: "Blossom Ville" },
  { img: "/images/pill_O_Boticario.png",    label: "O Boticário" },
];

const cards = [
  { img: "/images/perf_Natura.webp",       name: "Natura",       desc: "Fragrâncias naturais com ingredientes da biodiversidade brasileira. Sofisticação com propósito." },
  { img: "/images/perf_Avon.webp",          name: "Avon",         desc: "Clássicos inesquecíveis e lançamentos modernos para todos os estilos e personalidades." },
  { img: "/images/perf_Blossom_Ville.webp", name: "Blossom Ville",desc: "Aromas florais e delicados que evocam elegância e feminilidade a cada spray." },
  { img: "/images/perf_O_Boticario.png",    name: "O Boticário",  desc: "Uma das maiores marcas de perfumaria do Brasil, com fragrâncias sofisticadas para todos os momentos." },
];

export default function Perfumes() {
  return (
    <>
      <style>{`
        .s-perf { padding: 5rem 0; background: #fff; }
        .sec-wrap { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .sec-head { text-align: center; margin-bottom: 3rem; }
        .sec-tag {
          display: inline-flex; align-items: center; gap: 0.7rem;
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: #d4788a; margin-bottom: 0.7rem;
        }
        .sec-tag::before,.sec-tag::after { content:''; width:28px; height:1px; background:#f5d0d8; display:inline-block; }
        .sec-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem); color: #2e1a24; line-height: 1.2;
        }
        .sec-title em { font-style: italic; color: #d4788a; }
        .pills { display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
        .pill {
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.6rem 1.3rem;
          border: 1.5px solid rgba(212,120,138,0.2);
          border-radius: 100px; background: #fdf7f4;
          font-size: 0.82rem; font-weight: 500; color: #2e1a24;
          cursor: default; transition: all 0.3s;
        }
        .perf-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.2rem; }
        .perf-card {
          background: #fdf7f4; border: 1.5px solid rgba(212,120,138,0.15);
          border-radius: 16px; padding: 2rem 1.2rem;
          text-align: center; cursor: default; transition: all 0.35s;
          position: relative; overflow: hidden;
        }
        .perf-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(212,120,138,0.15); border-color: #f5d0d8; }
        .perf-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.15rem; font-weight: 600; color: #2e1a24; margin: 0.9rem 0 0.4rem; }
        .perf-card p { font-size: 0.78rem; color: #9a7282; font-weight: 300; line-height: 1.7; }

        @media (max-width: 1024px) {
          .perf-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 600px) {
          .s-perf { padding: 3.5rem 0; }
          .perf-grid { grid-template-columns: repeat(2,1fr); gap: 0.8rem; }
          .perf-card { padding: 1.4rem 0.8rem; border-radius: 12px; }
          .perf-card h3 { font-size: 1rem; }
          .perf-card p { font-size: 0.72rem; }
          .pill { font-size: 0.75rem; padding: 0.5rem 1rem; }
          .sec-wrap { padding: 0 1rem; }
        }
      `}</style>

      <section className="s-perf" id="perfumes">
        <div className="sec-wrap">
          <div className="sec-head">
            <div className="sec-tag">Fragrâncias</div>
            <h2 className="sec-title">Perfumes que <em>encantam</em></h2>
          </div>
          <div className="pills">
            {brands.map((b) => (
              <div key={b.label} className="pill">
                <Image src={b.img} alt={b.label} width={24} height={24} style={{ objectFit: "contain", borderRadius: 5 }} />
                {b.label}
              </div>
            ))}
          </div>
          <div className="perf-grid">
            {cards.map((c) => (
              <div key={c.name} className="perf-card">
                <Image src={c.img} alt={c.name} width={80} height={80}
                  style={{ objectFit: "contain", borderRadius: 12, margin: "0 auto", display: "block", width: 80, height: 80 }} />
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
