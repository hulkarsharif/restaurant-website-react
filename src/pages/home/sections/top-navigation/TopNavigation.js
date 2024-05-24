import "./TopNavigation.css";
import cartIcon from "../../../../assets/cart.svg";
import logo from "../../../../assets/logo-white.svg";
import { Meal } from "../menu/Menu";
import burgerIcon from "../../../../assets/menu.svg";
import { useState } from "react";

const links = [
    { text: "Home", link: "https://google.com" },
    { text: "Menu", link: "https://facebook.com" },
    { text: "About Us", link: "" },
    { text: "Reservation", link: "" },
    { text: "Contact Us", link: "https:/contact.html" }
];

const Link = (props) => {
    return (
        <li>
            <a href={props.link}>{props.text}</a>
        </li>
    );
};
const TopNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    return (
        <header className="header">
            <nav className="navigation">
                <img src={logo} alt="DeliziOso" className="logo-white" />
                <ul className="navigation__links">
                    {links.map((link, idx) => (
                        <Link key={idx} link={link.link} text={link.text} />
                    ))}
                </ul>
                <div className="navigation__actions">
                    <figure>
                        <img src={cartIcon} alt="Shopping cart" />
                    </figure>
                    <button className="btn btn-sm btn-green">Log In</button>
                </div>
                <img
                    onClick={toggleMenu}
                    src={burgerIcon}
                    alt="Menu"
                    id="mobile-nav-icon"
                />
            </nav>
            {showMenu && (
                <nav className="mobile-nav">
                    <ul className="mobile-navigation__links">
                        {links.map((link, idx) => (
                            <Link key={idx} link={link.link} text={link.text} />
                        ))}
                    </ul>
                    <button className="btn btn-sm btn-green">Log In</button>
                </nav>
            )}
        </header>
    );
};

export { TopNavigation };
