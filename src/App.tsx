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
          </>
  );
}
