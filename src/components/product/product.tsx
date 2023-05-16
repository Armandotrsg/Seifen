import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { PricingCard } from "../card/pricingcard";

export const Product = component$(() => {
    const animate = useSignal(false);

    useVisibleTask$(() => {
        setTimeout(() => {
            animate.value = true;
        } , 700);
    })

    return(
        <section id="productos" class="grid grid-cols-12 p-10 gap-4 ">
            <div class="col-span-12 md:col-span-5 self-center justify-center items-center order-last md:order-first">
                <div class={"w-full"}>
                    <PricingCard />
                </div>
            </div>
            <div class={`col-span-12 md:col-span-7 order-first md:order-last opacity-0 ${animate.value ? "transition-all animate-show-on-scroll-left" : ""}`}>
                <h3 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white"> Compra Seifen </h3>
                <p class="mb-6 text-lg font-medium text-gray-500 dark:text-gray-400">
                    Con Seifen puedes ahorrar más detergente y espacio en tu hogar, con tan solo 5ml de Seifen puedes lavar hasta 5kg de ropa.
                    <br /> <br />
                    Adquiere Seifen contactándonos en nuestras redes sociales o mándanos un correo llenando el formulario de contacto.
                </p>
            </div>
        </section>
    )
})