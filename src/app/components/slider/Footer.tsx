'use client';

import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const ListItems = [
    { li: "1", },
    { li: "2", },
    { li: "3", },
    { li: "4", },
    { li: "5", },
    { li: "6", },
    { li: "7", },
    { li: "8", },
    { li: "9", },
    { li: "10", },
]

const Footer = () => {
  return (
    <footer>
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <Image
          src="/images/cuai.jpg"
          alt=""
          width={500}
          height={500}
          className="w-[50px] h-[50px] rounded-full"
       />
        <span className="ml-3 text-xl">CUAI</span>
      </a>
      <p className="mt-2 text-sm">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-dark">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Center for Urban Agriculture in Innovation
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
        <AiFillFacebook className="text-blue-500" size={20}/>
        </a>

        <a className="ml-3 text-gray-500">
         <FcGoogle size={20}/>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer