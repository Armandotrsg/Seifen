import { component$ } from "@builder.io/qwik";
import { Card } from "./card";

export const CardSection = component$(() => {
    return (
        <section class={"bg-slate-100 dark:bg-gray-800 flex justify-center pb-16"}>
            <div class="w-[95%] p-4 text-center bg-gradient-card border border-gray-200 rounded-xl shadow-xl sm:p-8 dark:bg-gray-900 dark:border-gray-700 shadow-gray-400 dark:shadow-black">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Seifen es más que un detergente
                        </h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti vitae quas, eaque minima doloremque porro modi culpa fugiat nisi aliquid.
                        </p>
                    </div>
                    <div class={"grid grid-cols-12 gap-4"}>
                        <div class={"col-span-12 sm:col-span-6 md:col-span-4 mx-auto sm:mx-0"}>
                            <Card image="" title={"Title"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, urna id tempor sagittis, ipsum justo ultricies massa, sed ultricies turpis augue nec ipsum. Nulla facilisi. Sed euismod, urna id tempor sagittis, ipsum justo ultricies massa, sed ultricies turpis augue nec ipsum. Nulla facilisi."} />
                        </div>
                        <div class={"col-span-12 sm:col-span-6 md:col-span-4 mx-auto sm:mx-0"}>
                            <Card image="" title={"Title"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, urna id tempor sagittis, ipsum justo ultricies massa, sed ultricies turpis augue nec ipsum. Nulla facilisi. Sed euismod, urna id tempor sagittis, ipsum justo ultricies massa, sed ultricies turpis augue nec ipsum. Nulla facilisi."} />
                        </div>
                        <div class={"col-span-12 sm:col-span-6 md:col-span-4 mx-auto sm:mx-0"}>
                            <Card image="" title={"Title"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, urna id tempor sagittis, ipsum justo ultricies massa, sed ultricies turpis augue nec ipsum. Nulla facilisi. Sed euismod, urna id tempor sagittis, ipsum justo ultricies massa, sed ultricies turpis augue nec ipsum. Nulla facilisi."} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
