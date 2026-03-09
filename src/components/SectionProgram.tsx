import member from "../assets/class-1.jpg"
import { useState } from "react";

export default function SectionProgram() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
     {/*section*/}
     <section className="section__container explore__container">
        <div className="explore__header">
          <h2 className="section__header">NOSSAS PROGRAMAS</h2>
          <div className="explore__nav">
            <span><i className="ri-arrow-left-line"></i></span>
            <span><i className="ri-arrow-right-line"></i></span>
          </div>
        </div>

        {/*card*/}
        <div className="explore__grid">
          <div className="explore__card">
            <span><i className="bx bx-dumbbell"></i></span>
            <h4>Musculação</h4>
            <p>
              A base para quem busca transformar o corpo e a saúde. Com foco em hipertrofia, emagrecimento ou fortalecimento, 
              nossa musculação oferece equipamentos modernos e acompanhamento profissional para garantir seus resultados. 
            </p>
            <a href="#">Garanta sua vaga <i className="ri-arrow-right-line"></i></a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-heart-pulse-fill"></i></span>
            <h4>Treinamento Funcional</h4>
            <p>   
            Prepare seu corpo para os desafios do dia a dia. Através de movimentos naturais, como agachar e saltar, melhorando o condicionamento físico, a agilidade e a postura em um treino dinâmico e nunca monótono.            </p>
                        <a href="#">Garanta sua vaga <i className="ri-arrow-right-line"></i></a>

          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-run-fill"></i></span>
            <h4>Dança</h4>
            <p>
            Quem dança, os males espanta! Uma aula vibrante que mistura diversos estilos musicais e coreografias divertidas. Melhore seu sistema cardiovascular e coordenação motora enquanto se diverte com a nossa comunidade.
            </p>
                        <a href="#">Garanta sua vaga <i className="ri-arrow-right-line"></i></a>

          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-flashlight-fill"></i></span>
            <h4>Jump! (Novidade)</h4>
            <p>
              Prepare-se para decolar! Utilizando mini trampolins, essa aula de alta intensidade promove um excelente trabalho cardiovascular e o fortalecimento dos membros inferiores, com o benefício de baixo impacto nas articulações.
            </p>
                        <a href="#">Garanta sua vaga <i className="ri-arrow-right-line"></i></a>

          </div>
        </div>
      </section>
      <div className="schedule__section">
        
        <a href=""><h2>MARQUE SUA AULA EXPERIMENTAL AGORA</h2></a>
      </div>
      <section className="ssection__container ttrainer__container" id="ttrainer">
        <div className="ttrainer__grid">

          <div className="ttrainer__card">
            <img src={member} alt="member" onClick={() => setSelectedImage(member)} className="clickable__image"/>
          </div>

          <div className="ttrainer__card">
            <img src={member} alt="member" onClick={() => setSelectedImage(member)} className="clickable__image"/>
          </div>

          <div className="ttrainer__card">
            <img src={member} alt="member" onClick={() => setSelectedImage(member)} className="clickable__image"/>
          </div>

          <div className="ttrainer__card">
            <img src={member} alt="member" onClick={() => setSelectedImage(member)} className="clickable__image"/>
          </div>

          <div className="ttrainer__card">
            <img src={member} alt="member" onClick={() => setSelectedImage(member)} className="clickable__image"/>
          </div>

          <div className="ttrainer__card">
            <img src={member} alt="member" onClick={() => setSelectedImage(member)} className="clickable__image"/>
          </div>

        </div>
      </section>

      {selectedImage && (
        <div className="image__modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" className="image__modal__content"/>
        </div>
      )}
    </>
  );
}
