import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/hero/hero';
import { MainDescription } from '~/components/maindescription/maindescription';
import { CardSection } from '~/components/card/cardsection';
import { Product } from '~/components/product/product';
import { Contact } from '~/components/forms/contact';
import { Faqs } from '~/components/faqs/faqs';

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
  title: 'Seifen',
  meta: [
    {
      name: 'description',
      content: 'Landing page para Seifen',
    },
  ],
};
