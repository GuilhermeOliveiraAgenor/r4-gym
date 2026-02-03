
import class1 from "../assets/class-1.jpg"
import class2 from "../assets/class-2.jpg"
import Footer from "./Footer";
import Nav from "./Nav";


export default function Pricing() {
  return (
    <>
    {/*section price cards*/}
    <section className="section__container price__container">
        <h2 className="section__header">OUR PRICING PLAN</h2>
        <p className="section__subheader">
          Our pricing plan comes with various membership tiers, each tailored
          to cater to different preferences and fitness aspirations.
        </p>
        <div className="price__grid">
          {/*card*/}
          <div className="price__card">
            <div className="price__card__content">
              <h4>Basic Plan</h4>
              <h3>16$</h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Smart workout plan
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                At home workouts
              </p>
            </div>
            <button className="btn price__btn">Join Now</button>
          </div>

          {/*card*/}
          <div className="price__card">
            <div className="price__card__content">
              <h4>Weekly Plan</h4>
              <h3>$25</h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                PRO Gyms
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Smart workout plan
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                At home workouts
              </p>
            </div>
            <button className="btn price__btn">Join Now</button>
          </div>

          {/*card*/}
          <div className="price__card">
            <div className="price__card__content">
              <h4>Monthly Plan</h4>
              <h3>$25</h3>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                ELITE Gyms & Classes
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                PRO Gym
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                Smart workout plan
              </p>
              <p>
                <i className="ri-checkbox-circle-line"></i>
                At home workouts
              </p>

              <p>
                <i className="ri-checkbox-circle-line"></i>
                Personal Training
              </p>
            </div>
            <button className="btn price__btn">Join Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
