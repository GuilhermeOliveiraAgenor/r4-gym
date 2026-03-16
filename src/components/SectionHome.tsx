import { useState } from "react";
import estrutura4 from "../assets/estrutura-4.jpg";
import treino from "../assets/treino.png";
import aparelho from "../assets/aparelho.png";

export default function SectionHome() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="ssection__container ttrainer__container" id="ttrainer">
        <div className="ttrainer__grid">
          <div className="ttrainer__card">
            <img
              src={estrutura4}
              alt="estrutura4"
              onClick={() => setSelectedImage(estrutura4)}
              className="clickable__image"
            />
          </div>
          <div className="ttrainer__card">
            <div className="ttrainer__content">
              <h4>Espaço Amplo e Confortável</h4>
              <h5></h5>
              <hr />
              <div className="ttrainer__socials">
                <a href="https://wa.me/5541996927137?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank">
                  <i className="ri-whatsapp-line"></i>
                </a>
                <a href="https://www.instagram.com/r4gymcuritiba/" target="_blank">
                  <i className="ri-instagram-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ttrainer__card ">
            <img
              src={aparelho}
              alt="aparelho"
              onClick={() => setSelectedImage(aparelho)}
              className="clickable__image aparelho__image"
            />
          </div>
          <div className="ttrainer__card">
            <div className="ttrainer__content">
              <h4>Acompanhamento de Profissionais Especializados</h4>
              <h5></h5>
              <hr />
            </div>
          </div>
          <div className="ttrainer__card">
            <img
              src={treino}
              alt="treino"
              onClick={() => setSelectedImage(treino)}
              className="clickable__image treino__image"
            />
          </div>
          <div className="ttrainer__card">
            <div className="ttrainer__content">
              <a href="/programas">
                <h4>Confira nossas Aulas</h4>
              </a>
              <h5></h5>
              <hr />
            </div>
          </div>
        </div>
      </section>
      {selectedImage && (
        <div className="image__modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="preview"
            className={`image__modal__content ${
              selectedImage === aparelho || selectedImage === treino ? "aparelho__modal" : ""
            }`}
          />{" "}
        </div>
      )}
    </>
  );
}
