import join from "../assets/class-1.jpg"

export default function SectionFeature() {
  return (
    <>
     {/*section features*/}
      <section className="section__container join_container">

        {/*header*/}
        <h2 className="section__header">WHY JOIN US ?</h2>

        <p className="section__subheader">
          Our Diverse membership creates a friendly and supportive atmosphere,
          where you can make friends and stay motivated
        </p>

        {/*image*/}
        <div className="join__image">

          <img src={join} alt="join" />

          {/*card*/}
          <div className="join__grid">

            <div className="join__card">
              <span><i className="ri-user-fill"></i></span>

              <div className="join__card__content">
                <h4>Personal Trainer</h4>
                <p>Unlock your potential with our expert Personal Trainers</p>
              </div>
            </div>

            {/*card*/}
            <div className="join__card">
              <span><i className="ri-vidicon-fill"></i></span>

              <div className="join__card__content">
                <h4>Practice session</h4>
                <p>Elevate your fitness with practice sessions.</p>
              </div>
            </div>

            {/*card*/}
            <div className="join__card">
              <span><i className="ri-building-fill"></i></span>

              <div className="join__card__content">
                <h4>Good management</h4>
                <p>Supportive management, for your fitness success</p>
              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}
