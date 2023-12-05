import "./Footer.css";

import logoDark from "../../../../assets/logo-dark.svg";
import twitter from "../../../../assets/twitter.svg";
import instagram from "../../../../assets/instagram.svg";
import facebook from "../../../../assets/facebook.svg";

const pageLinks = [
    { text: "Home", link: "https://google.com" },
    { text: "Menu", link: "https://facebook.com" },
    { text: "Order Online", link: "" },
    { text: "Catering", link: "" },
    { text: "Reservation", link: "https:/contact.html" }
];

const informationLinks = [
    { text: "About us", link: "https://google.com" },
    { text: "Testimonial", link: "https://facebook.com" },
    { text: "Event", link: "" }
];

export function Footer() {
    return (
        <footer id="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <img src={logoDark} alt="" className="footer__logo" />
                        <p className="footer__text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                        </p>
                        <div className="footer-social__icons">
                            <img src={twitter} alt="Twitter" />
                            <img src={instagram} alt="Instagram" />
                            <img src={facebook} alt="Facebook" />
                        </div>
                    </div>
                    <div className="footer__pages">
                        <h4 className="footer__heading">Page</h4>
                        {pageLinks.map((link, idx) => {
                            return (
                                <a
                                    href={link.link}
                                    className="footer__text"
                                    key={idx}
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                    </div>
                    <div className="footer__about">
                        <h4 className="footer__heading">Information</h4>
                        {informationLinks.map((link, idx) => {
                            return (
                                <a
                                    href={link.link}
                                    className="footer__text"
                                    key={idx}
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                    </div>
                    <div className="footer__contact">
                        <h4 className="footer__heading">Get In Touch</h4>
                        <p className="footer__text">
                            3247 Johnson Ave, <br />
                            Bronx, NY 10463
                        </p>
                        <a
                            href="mailto: hulkar_77@yahoo.com"
                            className="footer__text"
                        >
                            hulkar_77@yahoo.com
                        </a>
                        <a href="tel:347-567-2828" className="footer__text">
                            347-567-2828
                        </a>
                    </div>
                </div>
                <p className="footer__text text-center">
                    Copyright &copy; DeliziOso
                </p>
            </div>
        </footer>
    );
}
