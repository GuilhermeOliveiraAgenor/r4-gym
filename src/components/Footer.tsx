
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
    {/*footer*/}
    <footer className="section__container footer__container">
            <span className="bg__blur"></span>
            <span className="bg__blur footer__blur"></span>

        {/*logo*/}
        <div className="footer__col">
          <div className="footer__logo">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Unde corrupti molestiae, voluptatem non ipsam impedit
            numquam neque nisi fugiat
          </p>

          {/*logo social media*/}
          <div className="footer__socials">
            <a href="#"><i className="ri-facebook-circle-fill"></i></a>
            <a href="#"><i className="ri-instagram-fill"></i></a>
            <a href="#"><i className="ri-twitter-x-fill"></i></a>
          </div>
        </div>

        {/*column footer*/}
        <div className="footer__col">
          <h4>Empresa</h4>
          <a href="#">Bussiness</a>
          <a href="#">Franchise</a>
          <a href="#">Parceiros</a>
          <a href="#">Network</a>
        </div>

        {/*column footer*/}
        <div className="footer__col">
          <h4>Sobre nós</h4>
          <a href="#">Blogs</a>
          <a href="#">Security</a>
          <a href="#">Careers</a>
        </div>

        {/*column footer*/}
        <div className="footer__col">
          <h4>Contato</h4>
          <a href="#">Entre em Contato</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos e condições</a>
          <a href="#">Calculadora de IMC</a>
        </div>
      </footer>

      <div className="footer__bar">
        © 2026 R4 G. Todos os direitos reservados.
      </div>
     
    </>
  );
}
