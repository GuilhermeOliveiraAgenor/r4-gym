import Footer from "../components/Footer";
import Nav from "../components/Nav";


export default function Program() {
  return (
    <>
      <Nav/>
      {/*section*/}
      <section className="section__container explore__container">
        <div className="explore__header">
          <h2 className="section__header">EXPLORE OUR PROGRAMS</h2>
          <div className="explore__nav">
            <span><i className="ri-arrow-left-line"></i></span>
            <span><i className="ri-arrow-right-line"></i></span>
          </div>
        </div>

        {/*card*/}
        <div className="explore__grid">
          <div className="explore__card">
            <span><i className="ri-boxing-fill"></i></span>
            <h4>Strenght</h4>
            <p>
              It encompasses a range of activities that improve health,
              strenght, flexibility, and overall well-being
            </p>
            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-heart-pulse-fill"></i></span>
            <h4>Fat Lose</h4>
            <p>
              Embrace the essence of strenght as we delve into its various
              dimensions physical, mental, and emotional
            </p>
            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-run-fill"></i></span>
            <h4>Running</h4>
            <p>
              Through a combination of workout routines and expert guidance,
              we'll empower you to reach your goals
            </p>
            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-shopping-basket-fill"></i></span>
            <h4>Shop</h4>
            <p>
              Designed for individuals, our program offers an effective
              approach to gaining weight in a sustainable manner
            </p>
            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
