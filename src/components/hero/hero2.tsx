import { component$ } from "@builder.io/qwik";

export const Hero2 = component$(() => {
    return (
        <section class={`relative bg-hero bg-cover bg-center bg-no-repeat p-5 rounded-b-lg`}>
            <div class="absolute inset-0 bg-slate-300/75 dark:bg-gray-800/75 sm:bg-transparent sm:from-slate-300/95 sm:to-slate-300/25 sm:bg-gradient-to-r dark:sm:from-gray-800/95 dark:sm:to-gray-800/25"></div>

            <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex h-screen items-center justify-center md:justify-start md:px-8">
                <div class="max-w-xl text-center md:text-left">
                    <h1 class="dark:text-white font-extrabold text-5xl">
                        Seifen
                    </h1>

                    <p class="dark:text-white mt-4 max-w-lg md:text-xl/relaxed">
                        Más poder desengrasante y de limpieza, con menos cantidad
                    </p>

                    <div class="mt-4 md:mt-8 flex flex-wrap gap-4 text-center justify-center md:justify-start">
                        <a
                            href="#conocenos"
                            class="inline-flex flex-grow md:flex-grow-0 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                        >
                            Conoce más
                            <svg
                                class="w-5 h-5 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="#contacto"
                            class="inline-flex flex-grow md:flex-grow-0 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});
