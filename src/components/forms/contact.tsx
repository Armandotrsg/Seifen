import { component$, useSignal,useTask$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useSendEmail } from "~/routes/layout";

export const Contact = component$(() => {
    const email = useSignal("");
    const subject = useSignal("");
    const message = useSignal("");
    const phone = useSignal("");
    const showThanks = useSignal(false);

    const action = useSendEmail();

    useTask$(({track}) => {
        track(() => action.value)
        if (action.value?.success) {
            showThanks.value = true;
            email.value = "";
            subject.value = "";
            message.value = "";
            phone.value = "";
            setTimeout(() => {
                showThanks.value = false;
            }, 3500)
        }
    })    

    return (
        <section id="contacto">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contáctanos
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    ¿Quieres hacer un pedido? Contáctanos para tomarte la orden
                </p>
                <Form action={action} class="space-y-8">
                    {/* <input type="hidden" name="access_token" value="wunsatbq5e15ze32rfi32dk8" />
                    <input type="hidden" name="success_url" value="." />
                    <input type="hidden" name="error_url" value="." />     */}
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
                            onChange$={(e) => (email.value = e.target.value)}
                            value={email.value}
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
                            onChange$={(e) => (subject.value = e.target.value)}
                            value={subject.value}
                        />
                    </div>
                    <div>
                        <label
                            for="phone"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Compártenos tu número de teléfono para contactarte"
                            onChange$={(e) => (phone.value = e.target.value)}
                            pattern="[0-9]{10}"
                            value={phone.value}
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
                            onChange$={(e) => (message.value = e.target.value)}
                            value={message.value}
                        />
                    </div>
                    <button
                        type="submit"
                        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Send message
                    </button>
                </Form>
                {
                    showThanks.value && (
                        <div class="mt-5 flex items-center justify-center text-center">
                            <p class="text-2xl font-semibold text-green-500">¡Gracias por tu contactarnos!, te contactaremos lo más pronto posible</p>
                        </div>
                    )
                }
            </div>
        </section>
    );
});
