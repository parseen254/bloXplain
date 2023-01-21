import { MagnifyingGlassIcon, QueueListIcon } from "@heroicons/react/20/solid";

import { RightSideSection } from "ui";

export default function Web() {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8 bg-indigo-100">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Welcome to bloXplain
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Community driven, AI powered, decentralized, blockchiain explorer.
          </p>
        </div>
        <div>
          <div className="mt-1 mx-auto max-w-2xl py-16 px-6 sm:py-24 lg:px-8">
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <QueueListIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="transaction_id"
                  id="tx_id"
                  className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Transaction ID"
                />
              </div>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Fetch Transaction</span>
              </button>
            </div>
          </div>
        </div>
        <section className="flex">
          <div className="flex-1"></div>
          <RightSideSection />
        </section>
      </div>
    </div>
  );
}
