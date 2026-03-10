import Image from "next/image";

const heroCards = [
  { type: "logos", logos: ["/images/hero_logo_0.webp","/images/hero_logo_1.webp","/images/hero_logo_2.webp","/images/hero_logo_3.png"], title: "Perfumes", sub: "4 marcas exclusivas" },
  { type: "img", img: "/images/hero_Relogios.webp",    title: "Relógios",      sub: "Rommanel" },
  { type: "img", img: "/images/hero_Manicure.jpg",     title: "Manicure",      sub: "Cuidado & estilo" },
  { type: "img", img: "/images/hero_Personalizados.jpg",title: "Personalizados",sub: "Xícaras & garrafas" },
  { type: "img", img: "/images/hero_Tupperware.jpg",   title: "Tupperware",    sub: "Produtos para o lar" },
];

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg,#fce4ec 0%,#f8bbd0 50%,#f48fb1 100%);
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          position: relative;
        }
        .hero-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 50%,rgba(255,255,255,0.3) 0%,transparent 65%);
          pointer-events: none;
        }
        .hero-left {
          display: flex; flex-direction: column; justify-content: center;
          padding: 9rem 4rem 6rem 6rem;
          position: relative; z-index: 1;
        }
        .hero-eyebrow {
          display: flex; align-items: center; gap: 0.8rem;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: #9b3a5a; margin-bottom: 1.6rem;
        }
        .hero-eyebrow span { width: 36px; height: 1px; background: #9b3a5a; display: inline-block; }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 5rem);
          line-height: 1.08; color: #2e1a24;
        }
        .hero-title em { font-style: italic; color: #9b3a5a; display: block; }
        .hero-desc {
          margin-top: 1.8rem; font-size: 0.95rem; font-weight: 300;
          line-height: 1.85; color: rgba(46,26,36,0.65); max-width: 400px;
        }
        .hero-btn {
          display: inline-flex; align-items: center; margin-top: 2.8rem;
          background: linear-gradient(135deg,#d4788a,#b05068);
          color: #fff; padding: 0.9rem 2rem; border-radius: 100px;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; text-decoration: none;
          box-shadow: 0 6px 24px rgba(212,120,138,0.35);
          transition: all 0.3s; width: fit-content;
        }
        .hero-right {
          display: flex; align-items: center; justify-content: center;
          padding: 5rem 4rem 5rem 2rem;
          position: relative; z-index: 1;
        }
        .hero-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1rem; width: 100%; max-width: 420px;
        }
        .h-card {
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(155,58,90,0.15);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          text-align: center;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(155,58,90,0.1);
          transition: all 0.35s;
        }
        .h-card:nth-child(2) { margin-top: 1.8rem; }
        .h-card-logos { display: flex; gap: 4px; justify-content: center; margin-bottom: 0.7rem; flex-wrap: wrap; }
        .h-card-img { display: flex; justify-content: center; margin-bottom: 0.7rem; }
        .h-card h4 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem; font-weight: 600; color: #2e1a24;
        }
        .h-card p { font-size: 0.68rem; color: #9a7282; margin-top: 0.2rem; font-weight: 300; }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-left { padding: 7rem 2rem 3rem; text-align: center; align-items: center; }
          .hero-eyebrow { justify-content: center; }
          .hero-desc { text-align: center; max-width: 100%; }
          .hero-right { padding: 2rem 1.5rem 4rem; }
          .hero-grid { max-width: 100%; gap: 0.8rem; }
        }

        @media (max-width: 480px) {
          .hero-left { padding: 6rem 1.2rem 2.5rem; }
          .hero-right { padding: 1.5rem 1rem 3rem; }
          .hero-grid { grid-template-columns: 1fr 1fr; gap: 0.7rem; }
          .h-card { padding: 1.1rem 0.7rem; border-radius: 12px; }
          .h-card:nth-child(2) { margin-top: 0; }
          .h-card h4 { font-size: 0.85rem; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span />
            ✦ Beleza & Estilo
          </div>
          <h1 className="hero-title">
            Tudo que você<br />
            <em>precisa para</em>
            se sentir linda
          </h1>
          <p className="hero-desc">
            Perfumes, joias, relógios, presentes personalizados e cuidados com as mãos — tudo em um só lugar, com o carinho que você merece.
          </p>
          <a href="#contato" className="hero-btn">Fale Comigo</a>
        </div>

        <div className="hero-right">
          <div className="hero-grid">
            {heroCards.map((card, i) => (
              <div key={i} className="h-card">
                {card.type === "logos" && card.logos ? (
                  <div className="h-card-logos">
                    {card.logos.map((src, j) => (
                      <Image key={j} src={src} alt="" width={28} height={28}
                        style={{ objectFit: "contain", borderRadius: 6, width: 28, height: 28 }} />
                    ))}
                  </div>
                ) : (
                  <div className="h-card-img">
                    <Image src={card.img!} alt={card.title} width={64} height={64}
                      style={{ objectFit: "cover", borderRadius: 12, width: 64, height: 64 }} />
                  </div>
                )}
                <h4>{card.title}</h4>
                <p>{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
