import { component$ } from "@builder.io/qwik";

export const MainDescription = component$(() => {
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
                        We are strategists, designers and developers. Innovators
                        and problem solvers. Small enough to be simple and
                        quick, but big enough to deliver the scope you want at
                        the pace you need. Small enough to be simple and quick,
                        but big enough to deliver the scope you want at the pace
                        you need.
                    </p>
                    <p>
                        We are strategists, designers and developers. Innovators
                        and problem solvers. Small enough to be simple and
                        quick.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img
                        class="w-full rounded-lg shadow-lg shadow-gray-800 dark:shadow-black"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office content 1"
                        width={500}
                        height={500}
                    />
                    <img
                        class="mt-4 w-full lg:mt-10 rounded-lg shadow-lg shadow-gray-800 dark:shadow-black"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="office content 2"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
});
