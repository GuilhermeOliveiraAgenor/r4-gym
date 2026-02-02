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

      {/*section*/}
      <section className="section__container explore__container">

        <div className="explore__header">
          <h2 className="section__header">EXPLORE OUR PROGRAMS</h2>

          <div className="explore__nav">
            <span><i className="ri-arrow-left-line"></i></span>
            <span><i className="ri-arrow-right-line"></i></span>
          </div>
        </div>

        {/*card*/}
        <div className="explore__grid">

          <div className="explore__card">
            <span><i className="ri-boxing-fill"></i></span>

            <h4>Strenght</h4>

            <p>
              It encompasses a range of activities that improve health,
              strenght, flexibility, and overall well-being
            </p>

            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-heart-pulse-fill"></i></span>

            <h4>Fat Lose</h4>

            <p>
              Embrace the essence of strenght as we delve into its various
              dimensions physical, mental, and emotional
            </p>

            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-run-fill"></i></span>

            <h4>Running</h4>

            <p>
              Through a combination of workout routines and expert guidance,
              we'll empower you to reach your goals
            </p>

            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-shopping-basket-fill"></i></span>

            <h4>Shop</h4>

            <p>
              Designed for individuals, our program offers an effective
              approach to gaining weight in a sustainable manner
            </p>

            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>

        </div>

      </section>
 {/*section image*/}
 <section className="section__container class__container">

{/*image*/}
<div className="class__image">
  <span className="bg__blur"></span>

  <img src={class1} alt="class" className="class__img-1" />
  <img src={class2} alt="class" className="class__img-2" />
</div>

<div className="class__content">

  <h2 className="section__header">THE WILL YOU GET HERE</h2>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Sed enim officiis, voluptates et quis iste non ut,
    temporibus velit reiciendis, nulla distinctio repellendus
    error iure dolorum est sint mollitia quasi!
  </p>

  <button className="btn">Book A Class</button>

</div>

</section>
{/*section features*/}
<section className="section__container join_container">

{/*header*/}
<h2 className="section__header">WHY JOIN US ?</h2>

<p className="section__subheader">
  Our Diverse membership creates a friendly and supportive atmosphere,
  where you can make friends and stay motivated
</p>

{/*image*/}
<div className="join__image">

  <img src={join} alt="join" />

  {/*card*/}
  <div className="join__grid">

    <div className="join__card">
      <span><i className="ri-user-fill"></i></span>

      <div className="join__card__content">
        <h4>Personal Trainer</h4>
        <p>Unlock your potential with our expert Personal Trainers</p>
      </div>
    </div>

    {/*card*/}
    <div className="join__card">
      <span><i className="ri-vidicon-fill"></i></span>

      <div className="join__card__content">
        <h4>Practice session</h4>
        <p>Elevate your fitness with practice sessions.</p>
      </div>
    </div>

    {/*card*/}
    <div className="join__card">
      <span><i className="ri-building-fill"></i></span>

      <div className="join__card__content">
        <h4>Good management</h4>
        <p>Supportive management, for your fitness success</p>
      </div>
    </div>

  </div>

</div>

</section>


    </>
  );
}
