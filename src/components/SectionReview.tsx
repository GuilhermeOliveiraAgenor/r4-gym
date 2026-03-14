import member from "../assets/member.jpg";

export default function SectionReview() {
  return (
    <>
      {/*section review*/}
      <section className="review">
        <div className="section__container review__container">
          <span>
            <i className="ri-chat-quote-line"></i>
          </span>
          <div className="review__content">
            <h4>MEMBER REVIEW</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, nihil, totam ea sit
              doloribus libero, quos earum iure consequatur in quas enim ad a vitae quasi nemo rerum
              expedita non?
            </p>
            <div className="review__rating">
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <span>
                <i className="ri-star-fill"></i>
              </span>
            </div>
            <div className="review__footer">
              <div className="review__member">
                <img src={member} alt="member" />
                <div className="review__member__details">
                  <h4>Jane Cooper</h4>
                  <p>Software developer</p>
                </div>
              </div>
              <div className="review__nav">
                <span>
                  <i className="ri-arrow-left-line"></i>
                </span>
                <span>
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
