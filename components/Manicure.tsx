import Image from "next/image";

const servicos = [
  { img: "/images/mani_Esmaltacao_Simples.jpg", title: "Esmaltação Simples", desc: "Esmaltação clássica com acabamento impecável. Cores vibrantes ou suaves para o seu estilo do dia." },
  { img: "/images/mani_Esmaltacao_em_Gel.jpg",  title: "Esmaltação em Gel",  desc: "Durabilidade e brilho que duram semanas. Acabamento profissional com gel de alta qualidade." },
  { img: "/images/mani_Manicure_Completa.jpg",   title: "Manicure Completa",  desc: "Cutículas, lixamento, hidratação e esmaltação. Cuidado completo para suas mãos." },
];

export default function Manicure() {
  return (
    <>
      <style>{`
        .s-mani { padding: 5rem 0; background: linear-gradient(135deg,#fdf0f3 0%,#fdf8ee 100%); }
        .mani-wrap { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .mani-head { text-align: center; margin-bottom: 3rem; }
        .mani-tag {
          display: inline-flex; align-items: center; gap: 0.7rem;
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: #d4788a; margin-bottom: 0.7rem;
        }
        .mani-tag::before,.mani-tag::after { content:''; width:28px; height:1px; background:#f5d0d8; display:inline-block; }
        .mani-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,3.5vw,2.8rem); color: #2e1a24; line-height: 1.2; }
        .mani-title em { font-style: italic; color: #d4788a; }
        .mani-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.2rem; }
        .mani-card {
          background: #fff; border: 1.5px solid rgba(212,120,138,0.15);
          border-radius: 16px; overflow: hidden; cursor: default; transition: all 0.35s;
        }
        .mani-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(212,120,138,0.15); border-color: #f5d0d8; }
        .mani-card-img { width: 100%; height: 180px; object-fit: cover; display: block; }
        .mani-body { padding: 1.3rem 1.3rem 1.6rem; }
        .mani-body h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 600; color: #2e1a24; margin-bottom: 0.35rem; }
        .mani-body p { font-size: 0.78rem; color: #9a7282; font-weight: 300; line-height: 1.7; }

        @media (max-width: 900px) { .mani-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px) {
          .s-mani { padding: 3.5rem 0; }
          .mani-wrap { padding: 0 1rem; }
          .mani-grid { grid-template-columns: 1fr; gap: 0.9rem; }
          .mani-card-img { height: 200px; }
        }
      `}</style>

      <section className="s-mani" id="manicure">
        <div className="mani-wrap">
          <div className="mani-head">
            <div className="mani-tag">Cuidados</div>
            <h2 className="mani-title">Manicure com <em>capricho</em></h2>
          </div>
          <div className="mani-grid">
            {servicos.map((s) => (
              <div key={s.title} className="mani-card">
                <Image src={s.img} alt={s.title} width={400} height={180}
                  className="mani-card-img" />
                <div className="mani-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
