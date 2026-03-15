export default function SectionMap() {
  return (
    <section className="review">
      <div className="section__container review__container">
        <span>
          <i className="ri-map-pin-line"></i>
        </span>

        <div className="review__content">
          <div className="review__left">
            <h1>VISITE NOSSA ACADEMIA</h1>

            <div className="review__description">
              <p>Av. Santa Bernadethe, 2105, Fanny, Curitiba - PR, 82590-100</p>
            </div>

            <div className="review__hours">
              <p>
                <span className="bold__footer">Horário de funcionamento:</span>
                <br />
                Segunda a Sexta: 06:00 - 22:00
                <br />
                Sábado: 08:00 - 13:00
              </p>
            </div>
          </div>
          <div className="review__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.644480448781!2d-49.269935399999994!3d-25.483544199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce58d915ccfe1%3A0x4b991963ce0d2f33!2sAcademia%20R4%20Gym!5e0!3m2!1sen!2sbr!4v1773581591248!5m2!1sen!2sbr"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
