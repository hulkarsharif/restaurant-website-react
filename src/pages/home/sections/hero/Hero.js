import "./Hero.css";
import hero from "../../../../assets/hero.png";
const Hero = () => {
    return (
        <section id="hero-section">
            <div className="hero-section__container container">
                <div className="hero-section__left">
                    <span>Restaurant</span>
                    <h1 className="hero-section__heading">Italian Cuisine</h1>
                    <p className="hero-section__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Facere voluptatum expedita ipsum? Officia modi
                        reiciendis voluptatum eos quasi incidunt.
                    </p>
                    <div className="hero-section__cta">
                        <button className="btn btn-lg btn-orange">
                            Order Now
                        </button>
                        <button className="btn btn-lg btn-green">
                            Reservation
                        </button>
                    </div>
                </div>
                <div className="hero-section__right">
                    <img
                        src={hero}
                        alt="Spaghetti"
                        className="hero-section__img"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero };
