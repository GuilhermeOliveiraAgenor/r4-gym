import { useState } from "react";
import video from "../assets/video.mp4";

export default function SectionFeature() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section__container join_container">
      <div className="join__layout">
        {/* lado esquerdo */}
        <div className="join__content">
          <h2 className="section__header">VIVA O MOVIMENTO</h2>

          <p className="section__subheader">
            Cada treino é um passo a mais no caminho da evolução constante para alcançar a sua
            melhor versão
          </p>
          <div className="join__card join__card--cta">
            <span>
              <i className="ri-calendar-check-fill"></i>
            </span>
            <h4>AGENDAR AULA EXPERIMENTAL</h4>
          </div>
        </div>
        <div className="join__image">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="join__video clickable__image"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      {/* modal */}
      {open && (
        <div className="image__modal" onClick={() => setOpen(false)}>
          <video src={video} autoPlay controls className="video__modal__content" />
        </div>
      )}
    </section>
  );
}
