import { component$ } from "@builder.io/qwik";
import { navigationTabs } from "../navbar/navbar";
import logo from "../../assets/logo.jpg";

export const Footer = component$(() => {
    return (
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 p-5">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0">
                        <img src={logo} class="h-8 mr-3" alt="Seifen Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Seifen
                        </span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {navigationTabs.map((tab, index) => (
                            <li key={index}>
                                <a
                                    href={tab.href}
                                    class="mr-4 hover:underline md:mr-6 "
                                >
                                    {tab.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a href="/" class="hover:underline">
                            Seifen
                        </a>
                        . Todos los derechos reservados.
                    </span>
                    <ul class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <li>
                            <a
                                href="https://www.facebook.com/detergentepararopa"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>
                        </li>
                        <li class={"mt-[0.1rem]"}>
                            <a
                                href="https://api.whatsapp.com/send?phone=523325378642&data=AWAIJIlCBNivljyWglb4e51Wi6e9u_Z_AIiMYsYOZLqgJE6Dn-KDf2Dcv5WIC86isrXx2-vjEMs0DPb8FVYObBsEEQ_OJ-w7OmyDXz6jGXkU7DJMtkj1P85I7JUxAwSVBSc_u7MLNXBckrv6aMZwOem0A8jFWhxgWkiH1VSQr-DLkT5b1c4t-YLEG6NfFHEDU6K7ovSL07xIR05mUInO4_AkEcJFgdVnz51Ds8MmVaZRyZTwWOfLsu1vL1a-S0u6zcDIsYXRR6yk6y9xNFhfG_y88Y2B237pd5fgNFlPPw6c6Vs12OU&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3Rq_iKwgR6SpXOaIe-XhsfuILqnEvNfjiYmY3u9wltNpooBZgjMj1oEBs"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class={"w-5 h-5"}
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    id="Capa_1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 24 24"
                                    style="enable-background:new 0 0 24 24;"
                                    xml:space="preserve"
                                    width="512"
                                    height="512"
                                >
                                    <g id="WA_Logo">
                                        <g>
                                            <path
                                                style="fill-rule:evenodd;clip-rule:evenodd;"
                                                d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <span class="sr-only">Instagram page</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
});
