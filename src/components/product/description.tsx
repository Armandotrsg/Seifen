import { component$ } from "@builder.io/qwik";
import { useSignal, useVisibleTask$ } from "@builder.io/qwik";

export type DescriptionProps = {
    title: string;
    description: string;
    img: {
        src: string;
        alt: string;
    };
};

export const Description = component$(
    ({ item, index }: { item: DescriptionProps; index: number }) => {
        const animate = useSignal(false);

        useVisibleTask$(() => {
            setTimeout(() => {
                animate.value = true;
            }, 700);
        });
        return (
            <div
                class={`grid ${
                    index % 2 == 0 ? "flex-col-reverse" : ""
                } items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24`}
            >
                <div
                    class={`opacity-0 ${
                        index % 2 == 0 ? "order-none md:order-2" : ""
                    } ${
                        animate.value
                            ? `transition-all ${
                                  index % 2 == 0
                                      ? "animate-show-on-scroll-left"
                                      : "animate-show-on-scroll-right"
                              }`
                            : ""
                    }`}
                >
                    <h3 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        {item.title}
                    </h3>
                    <p class="mb-5 text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-left md:text-lg">
                        {item.description}
                    </p>
                </div>

                <div
                    class={`opacity-0 w-full h-full py-48 bg-gray-500 ${
                        animate.value
                            ? `transition-all ${
                                  index % 2 == 0
                                      ? "animate-show-on-scroll-right"
                                      : "animate-show-on-scroll-left"
                              }`
                            : ""
                    }`}
                >
                    {/* <img src={item.img.src} alt={item.img.alt} class="w-full h-full rounded-lg shadow-lg" /> */}
                </div>
            </div>
        );
    }
);
