import join from "../assets/class-1.jpg"

export default function SectionFeature() {
  return (
    <>
     {/*section features*/}
      <section className="section__container join_container">

        {/*header*/}
        <h2 className="section__header">VIVA O MOVIMENTO</h2>

        <p className="section__subheader">
        Cada treino é um passo a mais no caminho da evolução constante para alcançar a sua melhor versão
        </p>
        {/*image*/}
        <div className="join__image">

          <img src={join} alt="join" />

          {/*card*/}
          <div className="join__grid">

           

            {/*card*/}
            <div className="join__card join__card--cta">
  <span><i className="ri-calendar-check-fill"></i></span>

  <div className="join__card__content">
    <h4>AGENDAR AULA EXPERIMENTAL</h4>
  </div>
</div>
          

          </div>

        </div>

      </section>
    </>
  );
}
