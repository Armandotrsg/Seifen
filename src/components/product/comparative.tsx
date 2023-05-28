import { component$ } from "@builder.io/qwik";
import { Description, type DescriptionProps } from "./description";

export const Comparative = component$(() => {
    const feautures: DescriptionProps[] = [
        {
            title: "Con Seifen puedes ahorrar más detergente",
            description:
                "Con tan solo 5ml de Seifen puedes lavar hasta 5kg de ropa, comparado con detergentes convencionales que requieren de 100ml para lavar la misma cantidad de ropa.",
            img: {
                src: "",
                alt: "",
            },
        },
        {
            title: "Perfecto para espacios pequeños",
            description:
                "Seifen es un detergente concentrado, y por su contenido de 500ml es perfecto para espacios pequeños a comparación de los detergentes convencionales que vienen en presentaciones muchos más grandes.",
            img: {
                src: "",
                alt: "",
            },
        },
    ];
    return (
        <section class="px-10 pt-24 mx-auto max-w-7xl">
            {feautures.map((item, index) => (
                <Description item={item} index={index} key={index}/>
            ))}
        </section>
    );
});
