import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeAction$ } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero/hero";
import { MainDescription } from "~/components/maindescription/maindescription";
import { CardSection } from "~/components/card/cardsection";
import { Product } from "~/components/product/product";
import { Contact } from "~/components/forms/contact";
import { Faqs } from "~/components/faqs/faqs";

export const useSendEmail = routeAction$(async (message) => {
    let success = null;
    console.log(message);
    fetch("https://formsubmit.co/ajax/mandotrsg@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: message.subject,
          message: `Email: ${message.email} \n ${message.message}`
      })
  })
      .then((response) => response.json())
      .then((data) => {
          console.log("Success:", data);
          success = data.success;
      })
      .catch((error) => {
          console.error("Error:", error);
          success = false;
      });
    return success;

});

export default component$(() => {
    return (
        <>
            <Hero />
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
