import { MagnifyingGlassIcon, QueueListIcon } from "@heroicons/react/20/solid";
import { RightSideSection } from "ui";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Data from '../../../packages/interface/types';





export default function Web() {

  const DEFAULT_TX_HASH = 'bafy2bzacedmft62yzb2hncxzcb5pperubpjkbc6y5lzm7h2dxn67gfhzhbvbk';


  let [txHash, setTxHash] = useState(DEFAULT_TX_HASH);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let [data, setData] = useState<Data>();

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const proxyUrl = 'https://bloXplain-cors-anywhere.herokuapp.com/';
      const targetUrl = `https://hyperspace.filfox.info/api/v1/message/${txHash}`;
      const response = await axios.get(proxyUrl + targetUrl);
      setData(response.data);
      console.log(data);
    } catch (err) {
      setError(error);
    } finally {
      setLoading(false);

    }

  };
  [];
  

  
  
  return (
    <>
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8 border-2 border-gray-400 border-dashed rounded-t-xl border-b-0 mb-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Welcome to bloXplain
            
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Community driven, AI powered, decentralized, blockchiain explorer.
          </p>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
      <div className="mt-1 mx-auto max-w-2xl py-16 px-6 sm:py-24 lg:px-8">
        <div className="mt-1 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <QueueListIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="string"
              value={txHash}
              onChange={(e) => setTxHash(e.target.value)}
              className="block w-full rounded-none rounded-l-md border-gray-300 border-dashed pl-10 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              placeholder="Enter Transaction ID"
            />
          </div>
          <button
            type="submit"
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-dashed  border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
          >
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Fetch Transaction</span>
          </button>
        </div>
      </div>
    </form>
        </div>
        <section className="flex justify-evenly space-x-1">
          <div className="flex-1 w-3">
          <div className="flex-1 border-2 border-gray-400 rounded-t-xl border-dashed border-b-0 p-4">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Bloxplain Explorer  {loading && <span className="text-red-500 font-thin">Fetching Transactions</span>}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          View Latest Transactions.
        </p>
      </div>
      <div className="mt-5 border-t border-gray-200">
      {data && (
        <dl className="divide-y divide-gray-200">
          <div className="flex py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500 ">Message ID</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="flex">
                {data.cid}
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Address from</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">
                {data.from}
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Gas Used</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">
                {data.gasUsed}
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Block Height</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                  {data.height}
                </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">
              Method
            </dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">
                {data.method}
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                      <dt className="text-sm font-medium text-gray-500">Confirmations  { data.confirmations}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-200 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                        Status
                    </span>
                  </div>
                  <div className="ml-4 flex flex-shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {data.status}
                    </button>
                    <span className="text-gray-300" aria-hidden="true">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      Value
                    </span>
                  </div>
                  <div className="ml-4 flex flex-shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {data.value}
                    </button>
                    <span className="text-gray-300" aria-hidden="true">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {/* Remove */}
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          </dl>
          )}
      </div>
        </div>
            </div>
          <div className="flex-1 w-3">
            <RightSideSection />
          </div>
        </section>

      </div>
    </>
  );
}
