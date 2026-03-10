import Image from "next/image";

const produtos = [
  { img: "/images/tupp_Potes_e_Recipientes.jpg",   title: "Potes & Recipientes",  desc: "Potes herméticos para conservar alimentos com praticidade e durabilidade incomparáveis." },
  { img: "/images/tupp_Garrafas_e_Copos.webp",     title: "Garrafas & Copos",      desc: "Garrafas e copos que mantêm sua bebida na temperatura ideal por muito mais tempo." },
  { img: "/images/tupp_Marmitas_e_Lancheiras.jpg", title: "Marmitas & Lancheiras", desc: "Soluções práticas para o dia a dia, ideais para o trabalho, escola e viagens." },
  { img: "/images/tupp_Kits_e_Presentes.webp",     title: "Kits & Presentes",      desc: "Kits especiais para presentear com estilo. Produtos originais com garantia de qualidade." },
];

export default function Tupperware() {
  return (
    <>
      <style>{`
        .s-tupp { padding: 5rem 0; background: linear-gradient(135deg,#e8f5e9 0%,#f1f8e9 100%); }
        .tupp-wrap { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .tupp-head { text-align: center; margin-bottom: 3rem; }
        .tupp-tag {
          display: inline-flex; align-items: center; gap: 0.7rem;
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: #4caf50; margin-bottom: 0.7rem;
        }
        .tupp-tag::before,.tupp-tag::after { content:''; width:28px; height:1px; background:#c8e6c9; display:inline-block; }
        .tupp-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,3.5vw,2.8rem); color: #2e1a24; line-height: 1.2; }
        .tupp-title em { font-style: italic; color: #388e3c; }
        .tupp-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.2rem; }
        .tupp-card {
          background: #fff; border: 1.5px solid #c8e6c9;
          border-radius: 16px; padding: 2rem 1.2rem;
          text-align: center; cursor: default; transition: all 0.35s;
          position: relative; overflow: hidden;
        }
        .tupp-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(76,175,80,0.15); border-color: #a5d6a7; }
        .tupp-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 600; color: #2e1a24; margin: 0.9rem 0 0.4rem; }
        .tupp-card p { font-size: 0.78rem; color: #9a7282; font-weight: 300; line-height: 1.7; }

        @media (max-width: 1024px) { .tupp-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px) {
          .s-tupp { padding: 3.5rem 0; }
          .tupp-wrap { padding: 0 1rem; }
          .tupp-grid { grid-template-columns: repeat(2,1fr); gap: 0.8rem; }
          .tupp-card { padding: 1.4rem 0.8rem; border-radius: 12px; }
          .tupp-card h3 { font-size: 0.95rem; }
        }
      `}</style>

      <section className="s-tupp" id="tupperware">
        <div className="tupp-wrap">
          <div className="tupp-head">
            <div className="tupp-tag">Produtos para o Lar</div>
            <h2 className="tupp-title">Tupperware de <em>qualidade</em></h2>
          </div>
          <div className="tupp-grid">
            {produtos.map((p) => (
              <div key={p.title} className="tupp-card">
                <Image src={p.img} alt={p.title} width={64} height={64}
                  style={{ objectFit: "cover", borderRadius: 12, margin: "0 auto", display: "block", width: 64, height: 64 }} />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
