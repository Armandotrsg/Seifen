import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Hero2 } from "~/components/hero/hero2";
import { MainDescription } from "~/components/maindescription/maindescription";
import { CardSection } from "~/components/card/cardsection";
// import { Comparative } from "~/components/product/comparative";
import { Product } from "~/components/product/product";
import { Contact } from "~/components/forms/contact";
import { Faqs } from "~/components/faqs/faqs";

export default component$(() => {
    return (
        <>
            <Hero2 />
            <MainDescription />
            <CardSection />
            {/* <Comparative /> */}
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
            content: "Seifen, detergente ultra concentrado para ropa y quita grasas",
        },
    ],
};
