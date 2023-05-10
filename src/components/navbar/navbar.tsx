import { $, component$, useStore } from "@builder.io/qwik";
import logo from "../../assets/logo.jpg";

export const navigationTabs = [
  {
    name: "Conócenos",
    href: "#conocenos",
  },
  {
    name: "Productos",
    href: "#productos",
  }, {
    name: "Contacto",
    href: "#contacto",
  },
  {
    name: "FAQs",
    href: "#faqs",
  }
]

export const Navbar = component$(() => {
    const state = useStore({
        open: false,
        scrolled: false,
    });
    const handleScroll = $(() => {
        if (window.scrollY > 50) {
            state.scrolled = true;
        } else {
            state.scrolled = false;
        }
    });

    return (
        <nav
            class={`${
                state.scrolled
                    ? "bg-slate-100 border-b border-gray-300 dark:border-gray-600 dark:bg-gray-900"
                    : "bg-transparent"
            }  fixed w-full z-20 top-0 left-0  duration-300 ease-in-out`}
            window:onScroll$={handleScroll}
        >
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center">
                    <img
                        src={logo}
                        class="h-8 mr-3"
                        alt="Seifen Logo"
                    />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Seifen
                    </span>
                </a>
                <div class="flex md:order-2">
                    <a
                        href="#productos"
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        ¡Ordena ya!
                    </a>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick$={() => (state.open = !state.open)}
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    class={`items-center justify-between ${
                        !state.open ? "hidden" : ""
                    } w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul
                        class={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 duration-300 ease-in-out ${state.scrolled ? "bg-transparent" : "bg-slate-100 md:bg-transparent dark:bg-gray-800"} dark:border-gray-700`}
                    >
                      {navigationTabs.map((tab, index) => (
                        <li key={index}>
                          <a
                                href={tab.href}
                                class="block py-2 pl-3 pr-4 dark:text-white bg-transparent hover:bg-primary-500 md:hover:bg-transparent rounded md:bg-transparent md:p-0 md:hover:text-secondary-700"
                            >
                                {tab.name}
                            </a>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
});
