import class1 from "../assets/class-1.jpg";
import class2 from "../assets/class-2.jpg";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Image() {
  return (
    <>
    {/*section image*/}
      <section className="section__container class__container">

        {/*image*/}
        <div className="class__image">
          <span className="bg__blur"></span>
          <img src={class1} alt="class" className="class__img-1" />
          <img src={class2} alt="class" className="class__img-2" />
        </div>
        <div className="class__content">
          <h2 className="section__header">THE WILL YOU GET HERE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sed enim officiis, voluptates et quis iste non ut,
            temporibus velit reiciendis, nulla distinctio repellendus
            error iure dolorum est sint mollitia quasi!
          </p>
          <button className="btn">Book A Class</button>
        </div>
      </section>
    </>
  );
}
