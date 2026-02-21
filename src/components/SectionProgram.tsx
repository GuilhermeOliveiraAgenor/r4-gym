
export default function SectionProgram() {
  return (
    <>
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
            <h4>Musculação</h4>
            <p>
              A base para quem busca transformar o corpo e a saúde. Com foco em hipertrofia, emagrecimento ou fortalecimento, 
nossa musculação oferece equipamentos modernos e acompanhamento profissional para garantir seus resultados. 
            </p>
            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>

          {/*card*/}
          <div className="explore__card">
            <span><i className="ri-heart-pulse-fill"></i></span>
            <h4>Treinamento Funcional</h4>
            <p>   
g
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
    </>
  );
}
