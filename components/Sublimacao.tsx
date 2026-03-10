import Image from "next/image";

const items = [
  { img: "/images/sub_Xicaras.jpg",    title: "Xícaras Personalizadas", desc: "Crie a xícara dos seus sonhos com fotos, mensagens e nomes. Perfeitas para presentear com afeto." },
  { img: "/images/sub_Garrafas.jpg",   title: "Garrafas Térmicas",      desc: "Garrafas personalizadas com sua identidade visual ou imagem preferida. Presente que impressiona todo dia." },
  { img: "/images/sub_Encomendas.jpg", title: "Encomendas Especiais",   desc: "Aniversários, casamentos, datas comemorativas — o presente ideal para cada ocasião especial." },
];

export default function Sublimacao() {
  return (
    <>
      <style>{`
        .s-sub { padding: 5rem 0; background: #fff; }
        .sub-wrap { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .sub-head { text-align: center; margin-bottom: 3rem; }
        .sub-tag {
          display: inline-flex; align-items: center; gap: 0.7rem;
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: #d4788a; margin-bottom: 0.7rem;
        }
        .sub-tag::before,.sub-tag::after { content:''; width:28px; height:1px; background:#f5d0d8; display:inline-block; }
        .sub-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem,3.5vw,2.8rem); color: #2e1a24; line-height: 1.2; }
        .sub-title em { font-style: italic; color: #d4788a; }
        .sub-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .sub-circle-wrap { display: flex; justify-content: center; }
        .sub-circle {
          width: 300px; height: 300px; border-radius: 50%; overflow: hidden;
          border: 4px solid #f5d0d8;
          box-shadow: 0 0 0 10px #fdf0f3, 0 16px 60px rgba(212,120,138,0.18);
          animation: subFloat 5s ease-in-out infinite; flex-shrink: 0;
        }
        @keyframes subFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .sub-items { display: flex; flex-direction: column; gap: 1.2rem; }
        .sub-item {
          display: flex; gap: 1rem; align-items: center;
          padding: 1.2rem 1.3rem; border-radius: 14px;
          border: 1.5px solid transparent;
          background: #fdf7f4; transition: all 0.3s; cursor: default;
        }
        .sub-item:hover { border-color: #f5d0d8; box-shadow: 0 8px 32px rgba(212,120,138,0.12); transform: translateX(5px); }
        .sub-icon { width: 60px; height: 60px; flex-shrink: 0; border-radius: 13px; overflow: hidden; border: 2px solid rgba(212,120,138,0.15); }
        .sub-icon img { width: 100%; height: 100%; object-fit: cover; }
        .sub-text h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-weight: 600; color: #2e1a24; margin-bottom: 0.25rem; }
        .sub-text p { font-size: 0.78rem; color: #9a7282; font-weight: 300; line-height: 1.7; }

        @media (max-width: 900px) {
          .sub-layout { grid-template-columns: 1fr; gap: 2.5rem; }
          .sub-circle { width: 240px; height: 240px; }
        }
        @media (max-width: 600px) {
          .s-sub { padding: 3.5rem 0; }
          .sub-wrap { padding: 0 1rem; }
          .sub-circle { width: 200px; height: 200px; }
          .sub-item { padding: 1rem; flex-direction: row; }
          .sub-icon { width: 50px; height: 50px; }
        }
      `}</style>

      <section className="s-sub" id="sublimacao">
        <div className="sub-wrap">
          <div className="sub-head">
            <div className="sub-tag">Presentes Únicos</div>
            <h2 className="sub-title">Sublimação <em>personalizada</em></h2>
          </div>
          <div className="sub-layout">
            <div className="sub-circle-wrap">
              <div className="sub-circle">
                <Image src="/images/sub_circle.jpg" alt="Sublimação" width={300} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
            <div className="sub-items">
              {items.map((item) => (
                <div key={item.title} className="sub-item">
                  <div className="sub-icon">
                    <Image src={item.img} alt={item.title} width={60} height={60} />
                  </div>
                  <div className="sub-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
