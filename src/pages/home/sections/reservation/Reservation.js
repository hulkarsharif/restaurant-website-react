import "./Reservation.css";
import reservation from "../../../../assets/reservation.png";
export function Reservation() {
    return (
        <section id="reservation-section">
            <div className="reservation-section__container container">
                <figure className="reservation-section__left">
                    <img src={reservation} alt="People gathering for food" />
                </figure>
                <div className="reservation-section__right">
                    <h2>
                        Let's reserve <span>a table</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis, quas porro at accusamus quae iste unde modi
                    </p>
                    <button className="btn btn-lg btn-orange">
                        Reservation
                    </button>
                </div>
            </div>
        </section>
    );
}
