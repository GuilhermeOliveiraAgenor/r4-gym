import class2 from "../assets/class-2.jpg";
import estrutura2 from "../assets/estrutura-2.jpg";

export default function SectionImage() {
  return (
    <>
      {/*section image*/}
      <section className="section__container class__container">
        {/*image*/}
        <div className="class__image">
          <span className="bg__blur"></span>
          <img
            src={estrutura2}
            alt="Academia equipada para treino com pesos e condicionamento físico"
            loading="lazy"
            className="class__img-1"
          />
          <img
            src={class2}
            alt="Aluno treinando na academia"
            loading="lazy"
            className="class__img-2"
          />
        </div>
        <div className="class__content">
          <h2 className="section__header">SEU CORPO SAUDÁVEL</h2>
          <p>
            Oferecemos treinos completos para <b>transformar</b> seu corpo e sua <b>saúde</b>.
            Contamos com musculação focada em hipertrofia e emagrecimento, aliado ao suporte de
            profissionais qualificados e ao uso de <b>equipamentos modernos </b>
            proporcionando atividades adaptadas aos seus objetivos.
          </p>
          <a
            href="https://wa.me/5541996289080?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20treinos%20da%20academia."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">FALE PELO WHATSAPP</button>
          </a>
        </div>
      </section>
    </>
  );
}
