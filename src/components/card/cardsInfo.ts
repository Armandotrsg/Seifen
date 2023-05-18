import type { CardProps } from "./card";
import blueShirt from "../../assets/blueShirt.jpg";
import clothes2 from "../../assets/clothes2.jpg";
import washingMachine from "../../assets/washingMachine.jpg";

export const CardsInfo: CardProps[] = [
    {
        index: 0,
        title: "Gran Poder Desengrasante",
        description: "Seifen tiene un gran poder desengrasante por lo que es capaz de quitar manchas de grasa de la ropa sin dejar rastro.",
        image: blueShirt,
        alt: "Camiseta azul flotando en el cielo"
    },
    {
        index: 1,
        title: "Despercude la Ropa",
        description: "Seifen es capaz de dejar la ropa como nueva, quitando manchas de todo tipo de tejidos.",
        image: washingMachine,
        alt: "Lavadora blanca"
    },
    {
        index: 2,
        title: "Para todo tipo de ropa",
        description: "Úsalo para ropa blanca, de color, delicada, de bebé, etc. y Seifen dejará tu ropa como nueva.",
        image: clothes2,
        alt: "Pila de ropa de colores"
    }
]