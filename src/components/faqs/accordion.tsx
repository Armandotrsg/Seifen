import { component$ } from "@builder.io/qwik";
import arrowWhite from "~/assets/arrowWhite.png";
import arrowBlack from "~/assets/arrowBlack.svg";

import type { preguntasProps } from "./preguntas";

export const Accordion = component$(({ question, answer, index }: preguntasProps) => {
    return (
        <div class="relative w-full overflow-hidden mb-5">
            {/* Question */}
            <input
                type="checkbox"
                class="peer absolute top-0 inset-x-0 w-full h-20 md:h-12 opacity-0 z-10 cursor-pointer"
                id={`question-${index}`}
                name={`question-${index}`}
            />
            <div class=" h-fit w-full p-5 md:p-3 flex items-center border-b-2 border-black dark:border-white">
                <label class="text-2xl font-semibold dark:text-white" for={`question-${index}`}>
                    {question}
                </label>
            </div>
            {/* Arrow */}
            <div class="absolute top-6 md:top-5 right-3  dark:text-white transition-transform duration-500 rotate-90 dark:rotate-0 peer-checked:-rotate-90 dark:peer-checked:-rotate-180">
                <img
                    src={arrowWhite}
                    alt="Arrow"
                    class="w-6 h-6 hidden dark:block"
                    width={24}
                    height={24}
                />
                <img
                    src={arrowBlack}
                    alt="Arrow"
                    class="w-6 h-6 block dark:hidden"
                    width={24}
                    height={24}
                />
            </div>
            {/* Answer */}
            <div class="transition-all duration-500 origin-top max-h-0 peer-checked:max-h-96">
                <div class="p-4 text-left">
                    <span class={"text-black dark:text-white"}>{answer}</span>
                </div>
            </div>
        </div>
    );
});
