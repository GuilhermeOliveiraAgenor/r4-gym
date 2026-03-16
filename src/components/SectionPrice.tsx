export default function SectionPrice() {
  return (
    <>
      {/*section price cards*/}
      <section className="section__container price__container">
        <h2 className="section__header">NOSSOS PLANOS</h2>
        <p className="section__subheader">
        Escolha o plano ideal para o seu objetivo.
        Temos opções flexíveis com benefícios exclusivos para você evoluir nos treinos.
        <br></br>
        <br></br>
        <div className="pricing">
        <span className="description_price">A partir de</span> <b>R$ 79,90/mês</b>
        </div>
        </p>
        <div className="price__grid">
          {/*card*/}
          <div className="price__card">
            <div className="price__card__content">
              <h4>Plano Mensal</h4>
              <h3></h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Musculação
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Aulas coletivas
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Sem fidelidade
              </p>
            </div>
            <button className="btn price__btn">Comece Agora</button>
          </div>

          {/*card*/}
          <div className="price__card">
            <div className="price__card__content">
              <h4>Plano Trimestral</h4>
              <h3></h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Musculação
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Aulas coletivas
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Avaliação física inicial
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
               Periodização de treino
              </p>
            </div>
            <button className="btn price__btn">Comece Agora</button>
          </div>

          {/*card*/}
          <div className="price__card">
            <div className="price__card__content">
              <h4>Plano Anual</h4>
              <h3></h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Musculação
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Aulas coletivas
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                4 avaliações físicas durante o ano (1 por trimestre)
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
               Pausa de até 30 dias
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
               Periodização de treino
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                 1 convite por mês - Traga um amigo para treinar com você
              </p>
            </div>
            <button className="btn price__btn">Comece Agora</button>
          </div>
          <div className="price__card">
            <div className="price__card__content">
              <h4>Plano Anual com Nutricionista</h4>
              <h3></h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Musculação
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Aulas coletivas
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                4 avaliações físicas durante o ano (1 por trimestre)
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
               3 consultas com nutricionista
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                 1 convite por mês - Traga um amigo para treinar com você
              </p>
            </div>
            <button className="btn price__btn">Comece Agora</button>
          </div>
          <div className="price__card">
            <div className="price__card__content">
              <h4>Horário Especial</h4>
              <br></br>
              <h3></h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Acesso restrito (09h às 15h)
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Musculação
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Aulas coletivas
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Sem fidelidade
              </p>
            </div>
            <button className="btn price__btn">Comece Agora</button>
          </div>
        </div>
      </section>
    </>
  );
}
