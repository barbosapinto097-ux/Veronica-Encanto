import Image from "next/image";

const joias = [
  { img: "/images/joia_Relogios.webp",  name: "Relógios",  badge: "Rommanel",   desc: "Elegância no pulso com qualidade e sofisticação garantidas." },
  { img: "/images/joia_Correntes.webp", name: "Correntes", badge: "Acessórios", desc: "Correntes delicadas e modernas para compor o look perfeito." },
  { img: "/images/joia_Brincos.webp",   name: "Brincos",   badge: "Rommanel",   desc: "Variedade de modelos: argolas, pinos, pendentes e muito mais." },
  { img: "/images/joia_Pulseiras.webp", name: "Pulseiras", badge: "Rommanel",   desc: "Pulseiras charmosas para todos os estilos e ocasiões especiais." },
];

export default function Joias() {
  return (
    <>
      <style>{`
        .s-joias { padding: 5rem 0; background: linear-gradient(150deg,#1e1118 0%,#2e1a24 100%); }
        .joias-wrap { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .joias-head { text-align: center; margin-bottom: 3rem; }
        .joias-tag {
          display: inline-flex; align-items: center; gap: 0.7rem;
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: #c9a84c; margin-bottom: 0.7rem;
        }
        .joias-tag::before,.joias-tag::after { content:''; width:28px; height:1px; background:rgba(201,168,76,0.3); display:inline-block; }
        .joias-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,3.5vw,2.8rem); color: #fff; line-height: 1.2; }
        .joias-title em { font-style: italic; color: #c9a84c; }
        .joias-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.2rem; }
        .joia-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(201,168,76,0.18);
          border-radius: 16px; padding: 2rem 1.2rem;
          text-align: center; cursor: default;
          backdrop-filter: blur(8px); transition: all 0.35s;
        }
        .joia-card:hover { background: rgba(201,168,76,0.1); border-color: #c9a84c; transform: translateY(-4px); box-shadow: 0 14px 48px rgba(201,168,76,0.2); }
        .joia-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 600; color: #fff; margin: 0.9rem 0 0.4rem; }
        .joia-badge {
          display: inline-block; padding: 0.22rem 0.8rem;
          background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3);
          border-radius: 100px; font-size: 0.62rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: #f0e0b0; margin-top: 0.4rem;
        }
        .joia-card p { font-size: 0.76rem; color: rgba(255,255,255,0.45); margin-top: 0.5rem; font-weight: 300; }

        @media (max-width: 1024px) { .joias-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px) {
          .s-joias { padding: 3.5rem 0; }
          .joias-wrap { padding: 0 1rem; }
          .joias-grid { grid-template-columns: repeat(2,1fr); gap: 0.8rem; }
          .joia-card { padding: 1.4rem 0.8rem; border-radius: 12px; }
          .joia-card h3 { font-size: 0.95rem; }
        }
      `}</style>

      <section className="s-joias" id="joias">
        <div className="joias-wrap">
          <div className="joias-head">
            <div className="joias-tag">Joias &amp; Acessórios</div>
            <h2 className="joias-title">Brilhe com <em>estilo</em></h2>
          </div>
          <div className="joias-grid">
            {joias.map((j) => (
              <div key={j.name} className="joia-card">
                <Image src={j.img} alt={j.name} width={90} height={90}
                  style={{ objectFit: "cover", borderRadius: 13, margin: "0 auto", display: "block", border: "2px solid rgba(201,168,76,0.2)", width: 90, height: 90 }} />
                <h3>{j.name}</h3>
                <span className="joia-badge">{j.badge}</span>
                <p>{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
