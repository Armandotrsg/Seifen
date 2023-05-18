import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import clothes1 from "../../assets/clothes1.jpg";
import laundryRoom from "../../assets/laundryRoom.jpg";

export const MainDescription = component$(() => {
    const animate = useSignal(false);

    useVisibleTask$(() => {
        setTimeout(() => {
            animate.value = true;
        } , 700);
    })

    return (
        <section
            id="conocenos"
            class="bg-slate-100 dark:bg-gray-800 p-10 lg:p-8 z-10 rounded-t-lg shadow-2xl shadow-black"
        >
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        ¿Qué es Seifen?
                    </h2>
                    <p class="mb-4">
                        Seifen es un detergente ultra concentrado que ayuda a limpiar
                        tu ropa de manera eficiente y especializado en ropa deportiva para dejarla
                        libre de malos olores.
                    </p>
                    <p>
                        Seifen logra esto con una cantidad mínima de producto: por cada 10 mililitros de
                        Seifen, es más poderoso que media taza de un detergente convencional.
                    </p>
                </div>
                <div class="grid sm:grid-cols-2 gap-4 mt-8">
                    <img
                        class={`w-full rounded-lg shadow-lg shadow-gray-800 dark:shadow-black min-h-[19rem] object-cover opacity-0 ${animate.value ? "transition-all animate-show-on-scroll-up" : ""}`}
                        src={clothes1}
                        alt="Pile of clothes"
                        width={500}
                        height={500}
                    />
                    <img
                        class={`hidden sm:block mt-4 w-full lg:mt-10 rounded-lg shadow-lg  shadow-gray-800 dark:shadow-black min-h-[19rem] object-cover opacity-0 ${animate.value ? "transition-all animate-show-on-scroll-down" : ""}`}
                        src={laundryRoom}
                        alt="Laundry Room"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
});
