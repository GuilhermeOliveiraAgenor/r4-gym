import { useState } from "react";
import estrutura3 from "../assets/estrutura-3.jpg"
import estrutura4 from "../assets/estrutura-4.jpg"
import treino from "../assets/treino.png"

export default function SectionHome() {

    const [selectedImage, setSelectedImage] = useState(null);
    
    return (
      <>
        <section className="ssection__container ttrainer__container" id="ttrainer">
            <div className="ttrainer__grid">
                <div className="ttrainer__card">
                    <img src={estrutura4} alt="estrutura4" onClick={() => setSelectedImage(estrutura4)} className="clickable__image"/>
                </div>
                <div className="ttrainer__card">
                    <div className="ttrainer__content">
                    <h4>Espaço Amplo e Confortável</h4>
                        <h5></h5>
                        <hr />
                        <div className="ttrainer__socials">
                            <a href="#"><i className="ri-whatsapp-line"></i></a>
                            <a href="#"><i className="ri-facebook-circle-fill"></i></a>
                            <a href="#"><i className="ri-instagram-fill"></i></a>
                        </div>
                    </div>
                </div>
                <div className="ttrainer__card">
                    <img src={estrutura3} alt="estrutura3" onClick={() => setSelectedImage(estrutura3)} className="clickable__image"/>
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
                    className="clickable__image treino__image"
                />
                </div>
                <div className="ttrainer__card">
                    <div className="ttrainer__content">
                        <h4>Confira nossas Aulas</h4>
                        {/*link section program*/}
                        <h5></h5>
                        <hr /> 
                    </div>
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
  