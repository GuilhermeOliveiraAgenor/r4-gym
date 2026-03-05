import member from "../assets/class-1.jpg"

export default function SectionHome() {
    return (
      <>
        <section className="ssection__container ttrainer__container" id="ttrainer">
            <div className="ttrainer__grid">
                <div className="ttrainer__card">
                    <img src={member} alt="member"/>
                </div>
                <div className="ttrainer__card">
                    <div className="ttrainer__content">
                    <h4>Espaço Amplo e Confortável</h4>
                        <h5></h5>
                        <hr />
                        <div className="ttrainer__socials">
                            <a href="#"><i className="ri-facebook-fill"></i></a>
                            <a href="#"><i className="ri-google-fill"></i></a>
                            <a href="#"><i className="ri-instagram-fill"></i></a>
                            <a href="#"><i className="ri-twitter-fill"></i></a>
                        </div>
                    </div>
                </div>
                <div className="ttrainer__card">
                    <img src={member} alt="member"/>
                </div>
                <div className="ttrainer__card">
                    <div className="ttrainer__content">
                       <h4>Acompanhamento de Profissionais Especializados</h4>
                        <h5></h5>
                        <hr />
                    </div>
                </div>
                <div className="ttrainer__card">
                    <img src={member} alt="member"/>
                </div>
                <div className="ttrainer__card">
                    <div className="ttrainer__content">
                        <h4>Confira nossas Aulas</h4>
                        <h5></h5>
                        <hr /> 
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  