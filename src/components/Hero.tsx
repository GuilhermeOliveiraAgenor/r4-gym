import Footer from "./Footer";
import Nav from "./Nav";
import header from "../assets/header.png"
import Pricing from "./Pricing";

export default function Hero() {
  return (
    <>
      {/*Hero*/}
      <header className="section__container header__container">

        {/*title hero*/}
        <div className="header__content">
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>
          <h4>MELHOR ACADEMIA DA CIDADE</h4>
          <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
          <p>
            Unleash your potential and embark on a journey towards a stronger,
            fitter, and more confident you. Sign up for 'Make Your Body Shape' now
            and witness the incredible transformation your body is capable of!
          </p>
          {/*button hero*/}
          <button className="btn">Entre em contato</button>
        </div>
        {/*image hero*/}
        <div className="header__image">
          <img src={header} alt="header" />
        </div>
      </header>
    </>
  );
}
