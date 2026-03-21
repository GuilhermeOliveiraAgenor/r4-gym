import { useRef, useState } from "react";
import video from "../assets/video.mp4";

export default function SectionFeature() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
            <a
              href="https://wa.me/5541996927137?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental."
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>AGENDAR AULA EXPERIMENTAL</h4>
            </a>
          </div>
        </div>
        <div className="join__image">
          <video
            ref={videoRef}
            src={video}
            autoPlay
            muted
            loop
            preload="metadata"
            playsInline
            className="join__video clickable__image"
            onClick={() => {
              videoRef.current?.pause();
              setOpen(true);
            }}
          />
        </div>
      </div>
      {/* modal */}
      {open && (
        <div
          className="image__modal"
          onClick={() => {
            setOpen(false);
            videoRef.current?.play();
          }}
        >
          <video
            src={video}
            autoPlay
            controls
            className="video__modal__content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
