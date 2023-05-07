import { component$ } from "@builder.io/qwik";
import { navigationTabs } from "../navbar/navbar";
import logo from "../../assets/logo.jpg";

export const Footer = component$(() => {
    return(

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 p-5">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
                <img src={logo} class="h-8 mr-3" alt="Seifen Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Seifen</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                {
                    navigationTabs.map((tab, index) => (
                        <li key={index}>
                            <a href={tab.href} class="mr-4 hover:underline md:mr-6 ">{tab.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Seifen</a>. Todos los derechos reservados.</span>
    </div>
</footer>


    )
})