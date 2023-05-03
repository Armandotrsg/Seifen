import { component$ } from "@builder.io/qwik";
import { PricingCard } from "../card/pricingcard";

export const Product = component$(() => {
    return(
        <section class="grid grid-cols-12 p-10 gap-4 ">
            <div class="col-span-12 md:col-span-5 self-center justify-center items-center order-last md:order-first">
                <div class={"w-full"}>
                    <PricingCard />
                </div>
            </div>
            <div class="col-span-12 md:col-span-7 order-first md:order-last">
                <h3 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white"> Compra Seifen </h3>
                <p class="mb-6 text-lg font-medium text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.
                </p>
            </div>
        </section>
    )
})