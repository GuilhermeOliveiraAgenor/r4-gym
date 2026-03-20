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
            <img src={logo} alt="R4 Gym Curitiba" />
          </div>
          <p>
            Av. Santa Bernadethe, 2105 - Fanny, <span className="no-break">Curitiba - PR</span>
            <br />
            <br />
            <span className="bold__footer">Horário de funcionamento:</span>
            <br />
            Segunda a Sexta: 06:00 - 22:00
            <br />
            Sábado: 08:00 - 13:00
          </p>
          {/*logo social media*/}
          <div className="footer__socials">
            <a href="https://wa.me/5541996927137?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20academia." target="_blank" rel="noopener noreferrer">
              <i className="ri-whatsapp-line"></i>
            </a>
            <a href="https://www.instagram.com/r4gymcuritiba/" target="_blank">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        {/*column footer*/}
        <div className="footer__col">
          <h4>Empresa</h4>
          <a href="#">Negócios</a>
          <a href="#">Franquias</a>
          <a href="#">Parceiros</a>
          <a href="#">Network</a>
        </div>

        {/*column footer*/}
        <div className="footer__col">
          <h4>Sobre nós</h4>
          <a href="#">Blogs</a>
          <a href="#">Segurança</a>
          <a href="#">Carreira</a>
        </div>

        {/*column footer*/}
        <div className="footer__col">
          <h4>Contato</h4>
          <a href="https://wa.me/5541996927137?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20academia." target="_blank">
            Entre em Contato
          </a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos e condições</a>
          <a href="https://abeso.org.br/calculadora-imc">Calculadora de IMC</a>
        </div>
      </footer>

      <div className="footer__bar">© 2026 R4 Gym. Todos os direitos reservados.</div>
    </>
  );
}
