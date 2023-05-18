import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export type CardProps = {
    title: string;
    description: string;
    image: string;
    index: number;
    alt: string;
};

export const Card = component$(({ title, description, index, image, alt }: CardProps) => {
    const animate = useSignal(false);

    useVisibleTask$(() => {
        setTimeout(() => {
            animate.value = true;
        } , 400 + (300*(index + 1)));
    });

    return (
        <div class={`max-w-sm opacity-0 bg-slate-50 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 ${animate.value ? "transition-all animate-show-on-scroll-up" : ""}`}>
            <div>
                <img
                    class="rounded-t-lg w-full h-72 md:h-52 object-cover"
                    src={image}
                    alt={alt}
                    width={987}
                    height={557}
                />
            </div>
            <div class="p-5 flex flex-col min-h-[15rem] max-h-[15rem]">
                <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 justify-center align-middle  dark:text-white">
                        {title}
                    </h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-md">
                    {description}
                </p>
            </div>
        </div>
    );
});
