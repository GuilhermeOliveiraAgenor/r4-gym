  import class1 from "../assets/class-1.jpg";
  import class2 from "../assets/class-2.jpg";

  export default function SectionImage() {
    return (
      <>
      {/*section image*/}
        <section className="section__container class__container">
          {/*image*/}
          <div className="class__image">
            <span className="bg__blur"></span>
            <img src={class1} alt="class" className="class__img-1" />
            <img src={class2} alt="class" className="class__img-2" />
          </div>
          <div className="class__content">
            <h2 className="section__header">SEU CORPO SAUDÁVEL</h2>
            <p>
          Oferecemos treinos completos para <b>transformar</b> seu corpo e sua <b>saúde</b>,
  com musculação focada em hipertrofia e emagrecimento, aliado ao suporte de profissionais qualificados e ao uso de <b>equipamentos modernos </b> 
  para proporcionar atividades adaptadas aos seus objetivos.
    </p>
            <button className="btn">NOSSAS ATIVIDADES</button>
          </div>
        </section>
      </>
    );
  }
