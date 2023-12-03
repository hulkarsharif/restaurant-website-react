import React from "react";

import spaghetti from "../../../../assets/menu-spaghetti.png";
import gnocchi from "../../../../assets/menu-gnocchi.png";
import rovioli from "../../../../assets/menu-rovioli.png";
import penneAllaVodak from "../../../../assets/menu-penne-alla-vodak.png";
import splitza from "../../../../assets/menu-splitza.png";
import risoto from "../../../../assets/menu-risoto.png";
import starEmpty from "../../../../assets/star-empty.svg";
import starFilled from "../../../../assets/star-filled.svg";

import "./Menu.css";
class Menu extends React.Component {
    render() {
        return (
            <section id="menu-section">
                <div className="menu-section__container container">
                    <h2>Our Popular Menu</h2>
                    <div className="menu-section__filters">
                        <button className="btn btn-lg btn-black">
                            All Catagories
                        </button>
                        <button className="btn btn-lg btn-gray">Dinner</button>
                        <button className="btn btn-lg btn-gray">Lunch</button>
                        <button className="btn btn-lg btn-gray">Dessert</button>
                        <button className="btn btn-lg btn-gray">Drink</button>
                    </div>
                    <div className="menu-section__meals">
                        <div className="card">
                            <img
                                src={spaghetti}
                                alt="Spaghetti"
                                className="card__img"
                            />
                            <h3 className="card__title">Spaghetti</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                            </div>
                            <p className="card__text">
                                A staple of Italian cuisine, pasta comes in many
                                shapes and sizes.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    11.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={gnocchi}
                                alt="Spaghetti"
                                className="card__img"
                            />
                            <h3 className="card__title">Gnocchi</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starEmpty} alt="" />
                            </div>
                            <p className="card__text">
                                Gnocchi is a type of pasta that is made from
                                potatoes.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    14.49
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>

                        <div className="card">
                            <img
                                src={rovioli}
                                alt="Spaghetti"
                                className="card__img"
                            />
                            <h3 className="card__title">Rovioli</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                            </div>
                            <p className="card__text">
                                Square-shaped pockets of dough filled with
                                various ingredients such as cheese, meat.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    8.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={penneAllaVodak}
                                alt="Spaghetti"
                                className="card__img"
                            />
                            <h3 className="card__title">Penne Alla Vodak</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starEmpty} alt="" />
                                <img src={starEmpty} alt="" />
                            </div>
                            <p className="card__text">
                                A dish made with braised veal shanks, served
                                with a tomato-based sauce.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    6.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={risoto}
                                alt="Spaghetti"
                                className="card__img"
                            />
                            <h3 className="card__title">Risotto</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                            </div>
                            <p className="card__text">
                                A creamy rice dish made with arborio rice,
                                broth, Parmesan cheese.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    9.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                src={splitza}
                                alt="Spaghetti"
                                className="card__img"
                            />
                            <h3 className="card__title">Splitza</h3>
                            <div className="menu-section__stars">
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starFilled} alt="" />
                                <img src={starEmpty} alt="" />
                            </div>
                            <p className="card__text">
                                Tomato sauce, mozzarella cheese, and a variety
                                of toppings.
                            </p>
                            <div className="card__footer">
                                <span className="menu-section__price">
                                    17.99
                                </span>
                                <button className="btn btn-md btn-orange">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export { Menu };
