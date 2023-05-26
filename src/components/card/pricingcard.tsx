import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const PricingCard = component$(() => {
    const animate = useSignal(false);

    useVisibleTask$(() => {
        setTimeout(() => {
            animate.value = true;
        }, 700);
    })

    const List = () => [
        "Poder desengrasante",
        "Quita manchas",
        "Elimina malos olores",
        "Ultra concentrado",
    ]

    const ListItem = ({ text }: { text: string }) => {
        return (
            <li class="flex space-x-3">
                <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Check icon</title>
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {text}
                </span>
            </li>
        );
    };
    return (
        <div class={`w-full opacity-0 mx-auto max-w-sm p-4 bg-slate-50 border border-gray-200 rounded-lg shadow-lg shadow-gray-400 dark:shadow-black sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${animate.value ? "transition-all animate-show-on-scroll-right" : ""}`}>
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Detergente Seifen
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
                <span class="text-3xl font-semibold">$</span>
                <span class="text-5xl font-extrabold tracking-tight">150*</span>
                <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /unidad
                </span>
            </div>
            <ul role="list" class="space-y-5 my-7">
                {List().map((text, index) => (
                    <ListItem key={index} text={text} />
                ))}
            </ul>
            <a
                href="#contacto"
                class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
                Contáctanos
            </a>
        </div>
    );
});
