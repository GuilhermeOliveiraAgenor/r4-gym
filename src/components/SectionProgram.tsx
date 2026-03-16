import estrutura2 from "../assets/estrutura-2.jpg";
import estrutura3 from "../assets/estrutura-3.jpg";
import estrutura4 from "../assets/estrutura-4.jpg";
import entrada2 from "../assets/entrada-2.jpg";
import fachada from "../assets/fachada.jpg";
import aparelho from "../assets/aparelho.png";

import { useState } from "react";

export default function SectionProgram() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/*section*/}
      <section className="section__container explore__container">
        <div className="explore__header">
          <h2 className="section__header">NOSSOS PROGRAMAS</h2>
          <div className="explore__nav">
            <span>
              <i className="ri-arrow-left-line"></i>
            </span>
            <span>
              <i className="ri-arrow-right-line"></i>
            </span>
          </div>
        </div>

        {/*card*/}
        <div className="explore__grid">
          <div className="explore__card">
            <span>
              <i className="bx bx-dumbbell"></i>
            </span>
            <h4>Musculação</h4>
            <p>
              A base para quem busca transformar o corpo e a saúde. Com foco em hipertrofia,
              emagrecimento ou fortalecimento, nossa musculação oferece equipamentos modernos e
              acompanhamento profissional para garantir seus resultados.
            </p>
            <a href="https://wa.me/5541996927137?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20treinar%20muscula%C3%A7%C3%A3o." target="_blank">
              Garanta sua vaga <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span>
              <i className="ri-heart-pulse-fill"></i>
            </span>
            <h4>Treinamento Funcional</h4>
            <p>
              Prepare seu corpo para os desafios do dia a dia. Através de movimentos naturais, como
              agachar e saltar, contribui para a melhorar o condicionamento físico, a agilidade e a
              postura em um treino dinâmico e nunca monótono.
            </p>
            <a href="https://wa.me/5541996927137?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20participar%20das%20aulas%20de%20treinamento%20funcional." target="_blank">
              Garanta sua vaga <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span>
              <i className="ri-run-fill"></i>
            </span>
            <h4>Dança</h4>
            <p>
              Quem dança, os males espanta! Uma aula vibrante que mistura diversos estilos musicais
              e coreografias divertidas. Melhore seu sistema cardiovascular e coordenação motora
              enquanto se diverte com a nossa comunidade.
            </p>
            <a href="https://wa.me/5541996927137?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20participar%20das%20aulas%20de%20dan%C3%A7a." target="_blank">
              Garanta sua vaga <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span>
              <i className="ri-flashlight-fill"></i>
            </span>
            <h4>Jump! (Novidade)</h4>
            <p>
              Prepare-se para decolar! Utilizando mini trampolins, essa aula de alta intensidade
              promove um excelente trabalho cardiovascular e o fortalecimento dos membros
              inferiores, com o benefício de baixo impacto nas articulações.
            </p>
            <a href="https://wa.me/5541996927137?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20participar%20das%20aulas%20de%20jump." target="_blank">
              Garanta sua vaga <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="schedule__section">
        <a href="https://wa.me/5541996927137?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental." target="_blank">
          <h2>MARQUE SUA AULA EXPERIMENTAL AGORA</h2>
        </a>
      </div>
      <section className="ssection__container ttrainer__container" id="ttrainer">
        <div className="ttrainer__grid">
          <div className="ttrainer__card">
            <img
              src={estrutura2}
              alt="estrutura2"
              onClick={() => setSelectedImage(estrutura2)}
              className="clickable__image"
            />
          </div>

          <div className="ttrainer__card">
            <img
              src={entrada2}
              alt="entrada2"
              onClick={() => setSelectedImage(entrada2)}
              className="clickable__image"
            />
          </div>

          <div className="ttrainer__card">
            <img
              src={estrutura4}
              alt="estrutura4"
              onClick={() => setSelectedImage(estrutura4)}
              className="clickable__image"
            />
          </div>

          <div className="ttrainer__card">
            <img
              src={estrutura3}
              alt="estrutura3"
              onClick={() => setSelectedImage(estrutura3)}
              className="clickable__image"
            />
          </div>

          <div className="ttrainer__card">
            <img
              src={fachada}
              alt="fachada"
              onClick={() => setSelectedImage(fachada)}
              className="clickable__image"
            />
          </div>

          <div className="ttrainer__card">
            <img
              src={aparelho}
              alt="aparelho"
              onClick={() => setSelectedImage(aparelho)}
              className="clickable__image aparelho__image"
            />
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="image__modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="preview"
            className={`image__modal__content ${
              selectedImage === aparelho ? "aparelho__modal" : ""
            }`}
          />
        </div>
      )}
    </>
  );
}
