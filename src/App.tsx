import "./styles/styles.css";

import class1 from "./assets/class-1.jpg";
import class2 from "./assets/class-2.jpg";
import header from "./assets/header.png";
import join from "./assets/join.jpg";
import logo from "./assets/logo.png";
import member from "./assets/member.jpg";


export default function App() {
  return (
    <>
      {/*menu*/}
      <nav>
        <div className="nav__logo">
          <a href="#"><img src={logo} alt="logo" /></a>
        </div>
        <ul className="nav__links">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">Program</a></li>
          <li className="link"><a href="#">Service</a></li>
          <li className="link"><a href="#">About</a></li>
          <li className="link"><a href="#">Community</a></li>
        </ul>
        <button className="btn">Join Now</button>
      </nav>
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
