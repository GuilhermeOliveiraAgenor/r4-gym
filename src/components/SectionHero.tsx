import header from "../assets/header.png"

export default function SectionHero() {
  return (
    <>
      {/*Hero*/}
      <header className="section__container header__container">

        {/*title hero*/}
        <div className="header__content">
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>
          <h4>FAÇA PARTE DO NOSSO TIME </h4>
          {/* <h1><span>R4</span> GYM</h1> */}
          <h1><span>VENHA</span> PARA A R4 GYM</h1>

          <p>
            Marque sua aula experimental GRÁTIS
          </p>
          {/*button hero*/}
          <button className="btn">Comece Agora</button>
        </div>
        {/*image hero*/}
        <div className="header__image">
          <img src={header} alt="header" />
        </div>
      </header>
    </>
  );
}
