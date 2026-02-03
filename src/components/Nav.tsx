
import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <>
     {/*menu*/}
     <nav>
        <div className="nav__logo">
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>
        <ul className="nav__links">
          <li className="link"><a href="/">Home</a></li>
          <li className="link"><a href="/program">Program</a></li>
          <li className="link"><a href="/service">Service</a></li>
          <li className="link"><a href="/about">About</a></li>
          <li className="link"><a href="/review">Community</a></li>
        </ul>
        <button className="btn">Join Now</button>
      </nav>

    </>
  );
}
