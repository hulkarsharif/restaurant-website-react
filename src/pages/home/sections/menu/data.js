import spaghetti from "../../../../assets/menu-spaghetti.png";
import gnocchi from "../../../../assets/menu-gnocchi.png";
import rovioli from "../../../../assets/menu-rovioli.png";
import penneAllaVodak from "../../../../assets/menu-penne-alla-vodak.png";
import splitza from "../../../../assets/menu-splitza.png";
import risoto from "../../../../assets/menu-risoto.png";
import starEmpty from "../../../../assets/star-empty.svg";
import starFilled from "../../../../assets/star-filled.svg";

import "./Menu.css";
export const meals = [
    {
        name: "Spaghetti",
        img: spaghetti,
        text: "A staple of Italian cuisine, pasta comes in manyshapes and sizes",
        rating: [1, 1, 1, 0, 0],
        price: "11.99"
    },
    {
        name: "Gnocchi",
        img: gnocchi,
        text: "A staple of Italian cuisine, pasta comes in manyshapes and sizes",
        rating: [1, 1, 1, 1, 0],
        price: "14.49"
    },
    {
        name: "Rovioli",
        img: rovioli,
        text: "A staple of Italian cuisine, pasta comes in manyshapes and sizes",
        rating: [1, 1, 1, 0, 0],
        price: "8.99"
    },
    {
        name: "Penne Alla Vodak",
        img: penneAllaVodak,
        text: "A staple of Italian cuisine, pasta comes in manyshapes and sizes",
        rating: [1, 1, 1, 1, 1],
        price: "6.99"
    },
    {
        name: "Risoto",
        img: risoto,
        text: "A staple of Italian cuisine, pasta comes in manyshapes and sizes",
        rating: [1, 1, 1, 1, 0],
        price: "6.99"
    },
    {
        name: "Splitza",
        img: splitza,
        text: "A staple of Italian cuisine, pasta comes in manyshapes and sizes",
        rating: [1, 1, 0, 0, 0],
        price: "17.99"
    }
];
