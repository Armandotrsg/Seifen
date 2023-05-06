import { component$ } from '@builder.io/qwik';
import arrow from '~/assets/arrow.png';

import type { preguntasProps } from './preguntas';

export const Accordion = component$(({question, answer}: preguntasProps) => {
  
  return (
    <div class="relative w-full overflow-hidden mb-5">
            {/* Question */}
            <input type="checkbox" class="peer absolute top-0 inset-x-0 w-full h-20 md:h-12 opacity-0 z-10 cursor-pointer" />
            <div class=" h-fit w-full p-5 md:p-3 flex items-center border-b-2 border-primary-700">
                <h1 class="text-2xl font-semibold text-primary-700">
                    {question}
                </h1>
            </div>
            {/* Arrow */}
            <div class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:-rotate-180">
            <img src={arrow} alt="Arrow" class="w-6 h-6"/>
            </div>
            {/* Answer */}
            <div  class="transition-all duration-500 origin-top max-h-0 peer-checked:max-h-96">
                <div class="p-4 text-left">
                    <span class={"dark:text-white"}>
                        {answer}
                    </span>
                </div>
            </div>
        </div>
  )
});