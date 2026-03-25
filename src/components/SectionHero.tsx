import header from "../assets/header.png";

export default function SectionHero() {
  return (
    <>
      {/*hero*/}
      <header className="section__container header__container">
        {/*title hero*/}
        <div className="header__content">
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>
          <h4>FAÇA PARTE DO NOSSO TIME </h4>
          {/* <h1><span>R4</span> GYM</h1> */}
          <h1>
            <span>VENHA</span> PARA A R4 GYM
          </h1>

          <p>
            Marque sua aula experimental <span className="hero">GRÁTIS</span>
          </p>
          {/*button hero*/}
          <a
            href="https://wa.me/5541996289080?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">COMECE AGORA</button>
          </a>
        </div>
        {/*image hero*/}
        <div className="header__image">
          <img src={header} loading="eager" alt="treino musculação" />
        </div>
      </header>
    </>
  );
}
