import "./Hours.css";
import { Button } from "../../../../design-system/Button/Button";

export function Hours() {
    return (
        <section id="hours-section">
            <div class="hours-section__container">
                <div class="hours-section__background">
                    <div class="hours-section__hours">
                        <h2>We are open from</h2>
                        <h3>MOnday - Sunday</h3>
                        <div class="hours-section__lunch-dinner">
                            <p>Lunch: Mon-Sun: 11:00am-03:00pm</p>
                            <p>Dinner: Sunday: 04:00pm-09:00pm</p>
                            <p>04:00pm-09:00pm</p>
                        </div>
                        <Button size="lg" color="orange">
                            Order Now
                        </Button>
                        <Button size="lg" color="white">
                            Reservation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
