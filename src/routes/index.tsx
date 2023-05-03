import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/hero/hero';
import { MainDescription } from '~/components/maindescription/maindescription';
import { CardSection } from '~/components/card/cardsection';
import { Product } from '~/components/product/product';

export default component$(() => {
  return (
    <>
      <Hero />
      <MainDescription />
      <CardSection />
      <Product />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
