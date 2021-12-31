import Link from "next/link";
import { tags } from "../lib/menu";
import { useRef } from "react";
import { useRouter } from 'next/router';
export default function Header() {
  const headerMenu = useRef(null);
  const {query} = useRouter();
  const scroll = (scrollOffset) => {
    headerMenu.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <header className="z-30 w-full px-2 py-2 bg-white sm:px-4">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <h1 className="font-heading text-purple-600 font-bold text-3xl">Cool Tools</h1>
            <div className="flex items-center space-x-1">
            <div className="hidden space-x-1 md:inline-flex">
              <Link href="/">
                <a className="btn btn-sm btn-link">Home</a>
              </Link>
            </div>
            <Link href="/add">
              <a className="btn btn-sm btn-link">Add a Tool</a>
            </Link>

            <form action="/search" method="get">
              <label htmlFor="query" className="hidden">Search</label>
              <input type="text" aria-labelledby="query" className="border p-1 rounded-l" id="query" name="query" placeholder="eg Figma" />
              <input type="submit" className="px-2 py-1 border bg-purple-600 text-white rounded-r" value="Find" />
            </form>
          </div>
        </div>
        <hr className="mt-4"/>
        <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className=" text-gray-400 hover:text-purple-700 rounded hover:bg-gray-100  mt-3" onClick={() => scroll(-100)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        </div>
        
        <div className="px-2 py-2 mt-3 overflow-y-auto no-scrollbar  whitespace-nowrap scroll-hidden" ref={headerMenu}>
        
          <ul className="inline-flex items-center list-none">
            {tags?.map(function (menu, index) {
              return (
                <li
                  key={index}
                  className="px-2 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
                >
                  <Link href={`/${menu}`}>
                 
                     {query?.tag == menu ? <a className="px-1 text-purple-600 border border-purple-600 rounded">{menu}</a>: <a className="px-1 hover:text-purple-600 border border-white hover:border-purple-600 rounded">{menu}</a>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" text-gray-400 hover:text-purple-700 mt-3 rounded hover:bg-gray-100" onClick={() => scroll(100)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        </div>
        </div>
      </header>
    </>
  );
}
