import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export type CardProps = {
    title: string;
    description: string;
    image: string;
    index: number;
};

export const Card = component$(({ title, description, index }: CardProps) => {
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
                    src="https://images.unsplash.com/photo-1682809463394-b464a18a02ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt={title}
                    width={987}
                    height={557}
                />
            </div>
            <div class="p-5">
                <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
});
