import { component$, useStore } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useSendEmail } from "~/routes";

export const Contact = component$(() => {
    const state = useStore({
        email: "",
        subject: "",
        message: "",
    });
    const sendEmail = useSendEmail();
    return (
        <section id="contacto">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contáctanos
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    ¿Quieres hacer un pedido? Contáctanos para tomarte la orden
                </p>
                <Form action={sendEmail} class="space-y-8">
                    <div>
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Email*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="nombre@seifen.com"
                            required
                            onChange$={(e) => (state.email = e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            for="subject"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Asunto*
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Déjanos saber como podemos ayudarte"
                            required
                            onChange$={(e) => (state.subject = e.target.value)}
                        />
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Mensaje*
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Escribe tu mensaje..."
                            required
                            onChange$={(e) => (state.message = e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Send message
                    </button>
                </Form>
            </div>
        </section>
    );
});
