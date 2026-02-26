
export default function SectionHomeImage() {
    return (
      <>
        <section className="ssection__container ttrainer__ccontainer" id="ttrainer">
            <h2 className="ssection__header">Our trainer</h2>
            <p className="ssection__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In pariatur odio quae dolorum, autem et minus accusantium delectus porro iure. Accusamus non repellat incidunt fugiat velit tenetur vitae reiciendis officiis?
            </p>
            <div className="ttrainer__grid">
                <div className="ttrainer__card">
                    <img src="assets/member"/>
                </div>
                <div className="ttrainer__card">
                    <div className="ttrainer__content">
                        <h4>James Rodrigues</h4>
                        <h5>Strenght and Conditioning</h5>
                        <hr />
                        <p>
                            With a background in competitive sports, he's dedicated you reach you reach your peak physical performance
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
  