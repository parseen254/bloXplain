import { Bars3Icon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { Fragment } from "react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function NavBar() {
  return (
    <nav className="bg-gray-200">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4"></div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-md border border-transparent bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 33 33"
                    className="-ml-1 mr-2 h-5 w-5"
                  >
                    <path
                      fill="#E17726"
                      stroke="#E17726"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M32.96 1l-13.14 9.72 2.45-5.73L32.96 1z"
                    ></path>
                    <path
                      fill="#E27625"
                      stroke="#E27625"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M2.66 1l13.02 9.8L13.35 5 2.66 1zm25.57 22.53l-3.5 5.34 7.49 2.06 2.14-7.28-6.13-.12zm-26.96.12l2.13 7.28 7.47-2.06-3.48-5.34-6.12.12z"
                    ></path>
                    <path
                      fill="#E27625"
                      stroke="#E27625"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M10.47 14.51l-2.08 3.14 7.4.34-.24-7.97-5.08 4.5zm14.68.01l-5.16-4.6-.17 8.07 7.4-.34-2.07-3.13zM10.87 28.87l4.49-2.16-3.86-3-.63 5.16zm9.4-2.17l4.46 2.17-.6-5.17-3.86 3z"
                    ></path>
                    <path
                      fill="#D5BFB2"
                      stroke="#D5BFB2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M24.73 28.87l-4.46-2.16.36 2.9-.04 1.23 4.14-1.97zm-13.86 0l4.16 1.97-.03-1.23.36-2.9-4.49 2.16z"
                    ></path>
                    <path
                      fill="#233447"
                      stroke="#233447"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M15.1 21.78l-3.7-1.08 2.62-1.2 1.09 2.28zm5.41 0l1.1-2.29 2.63 1.2-3.73 1.1z"
                    ></path>
                    <path
                      fill="#CC6228"
                      stroke="#CC6228"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M10.87 28.87l.65-5.34-4.13.12 3.48 5.22zm13.23-5.34l.63 5.34 3.5-5.22-4.13-.12zm3.13-5.88l-7.4.34.68 3.8 1.1-2.3 2.63 1.2 2.99-3.04zM11.4 20.7l2.62-1.2 1.09 2.28.69-3.8-7.4-.33 3 3.05z"
                    ></path>
                    <path
                      fill="#E27525"
                      stroke="#E27525"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M8.4 17.65l3.1 6.05-.1-3-3-3.05zm15.84 3.05l-.12 3 3.1-6.05-2.98 3.05zm-8.44-2.71l-.7 3.8.88 4.48.2-5.91-.38-2.37zm4.02 0l-.36 2.36.18 5.92.87-4.49-.69-3.8z"
                    ></path>
                    <path
                      fill="#F5841F"
                      stroke="#F5841F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M20.51 21.78l-.87 4.49.63.44 3.85-3 .12-3.01-3.73 1.08zM11.4 20.7l.1 3 3.86 3 .62-.43-.87-4.49-3.72-1.08z"
                    ></path>
                    <path
                      fill="#C0AC9D"
                      stroke="#C0AC9D"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M20.6 30.84l.03-1.23-.34-.28h-4.96l-.33.28.03 1.23-4.16-1.97 1.46 1.2 2.95 2.03h5.05l2.96-2.04 1.44-1.19-4.14 1.97z"
                    ></path>
                    <path
                      fill="#161616"
                      stroke="#161616"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M20.27 26.7l-.63-.43h-3.66l-.62.44-.36 2.9.33-.28h4.96l.34.28-.36-2.9z"
                    ></path>
                    <path
                      fill="#763E1A"
                      stroke="#763E1A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M33.52 11.35L34.62 6l-1.66-5-12.7 9.4 4.89 4.11 6.9 2.01 1.52-1.77-.66-.48 1.05-.96-.8-.62 1.05-.8-.7-.54zM1 5.99l1.12 5.36-.72.53 1.07.8-.8.63 1.04.96-.66.48 1.52 1.77 6.9-2 4.89-4.13L2.66 1 1 5.99z"
                    ></path>
                    <path
                      fill="#F5841F"
                      stroke="#F5841F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                      d="M32.05 16.52l-6.9-2 2.08 3.13-3.1 6.05 4.1-.05h6.13l-2.31-7.13zm-21.58-2.01l-6.9 2.01-2.3 7.13H7.4l4.1.05-3.1-6.05 2.08-3.14zm9.35 3.48l.45-7.6 2-5.4h-8.92l2 5.4.45 7.6.17 2.38v5.9h3.67l.02-5.9.16-2.38z"
                    ></path>
                  </svg>
                  <span>Connect Wallet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </nav>
  );
}
