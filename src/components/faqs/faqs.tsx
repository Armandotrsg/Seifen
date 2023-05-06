import { component$ } from "@builder.io/qwik";
import { Accordion } from "./accordion";
import { preguntas } from "./preguntas";

export const Faqs = component$(() => {
    return (
        <section class="p-5">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Frequently asked questions
                </h2>
            </div>
            <div class="flex flex-col items-start px-10 justify-center w-full">
                {
                    preguntas.map((pregunta, index) => {
                        return (
                            <Accordion {...pregunta} key={index} />
                        )
                    })
                }
            </div>
        </section>
    );
});
