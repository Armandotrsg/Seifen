import { component$ } from "@builder.io/qwik";
import { type DocumentHead, globalAction$ } from "@builder.io/qwik-city";
import { Hero2 } from "~/components/hero/hero2";
import { MainDescription } from "~/components/maindescription/maindescription";
import { CardSection } from "~/components/card/cardsection";
import { Product } from "~/components/product/product";
import { Contact } from "~/components/forms/contact";
import { Faqs } from "~/components/faqs/faqs";
import axios from "axios";

export const useSendEmail = globalAction$(async (message) => {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
        .post("https://formsubmit.co/ajax/mandotrsg@gmail.com", {
            name: message.subject,
            message: message.message,
        })
        .then((response) => console.log("HURRAY", response))
        .catch((error) => console.log(error));

    return true;
});

export default component$(() => {
    return (
        <>
            <Hero2 />
            <MainDescription />
            <CardSection />
            <Product />
            <Contact />
            <Faqs />
        </>
    );
});

export const head: DocumentHead = {
    title: "Seifen",
    meta: [
        {
            name: "description",
            content: "Landing page para Seifen",
        },
    ],
};
