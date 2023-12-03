import React from "react";
import "./Welcome.css";
import salad from "../../../../assets/salad.png";
class Welcome extends React.Component {
    render() {
        return (
            <section id="welcome-section">
                <div className="welcome-section__container container">
                    <figure className="welcome-section_left">
                        <img src={salad} alt="Salad" />
                    </figure>
                    <div className="welcome-section__right">
                        <h2>
                            Welcome to <span>DeliziOso</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit quae quaerat maiores delectus similique.
                        </p>
                        <button className="btn btn-lg btn-orange">
                            See Our Menu
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export { Welcome };
