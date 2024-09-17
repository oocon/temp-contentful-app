import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            perspiciatis rem autem maiores dolorum. Nostrum, eum et impedit
            velit non placeat! Quam odio minima consequuntur. Delectus maiores
            officia unde atque!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero image"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
