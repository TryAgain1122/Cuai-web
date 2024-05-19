'use client'

import Link from "next/link"
import Logo from "./Logo"
import { AiOutlineFacebook } from 'react-icons/ai'
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import NavLinks from "./NavLinks"

const navLinks = [
  { 
    id: 1,
    links: "Home",
    href: "/" 
  },
  { 
    id: 2,
    links: "Services",
    href: "/services"
  },

  { 
    id: 3,
    links: "Products",
    href: "/products"
  },

  { 
    id: 4,
    links: "About us",
    href: "about-us"
  }

]


const navbar = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click)
  }

  return (
    <AnimatePresence>
    <motion.div className="w-full p-4 px-5 sm:px-10 flex items-center justify-between"
      initial={{y: 10, opacity: 0}}
      animate={{ y: 0, opacity: 1 }}
      exit={{y: -10, opacity: 0}}
      transition={{ duration: 0.2 }}
    >
      
      <Logo />
      <button
       onClick={toggle}
       className="inline-block sm:hidden z-50">
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
              <span className="
                absolute
                top-0
                inline-block
                w-full
                h-0.5
                bg-gray-500
                rounded
                transition-all
                ease
                duration-200
              "
                style={{ transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"}}
              >&nbsp;</span>

              <span className="
                absolute
                top-0
                inline-block
                w-full
                h-0.5
                bg-gray-500
                rounded
                transition-all
                ease
                duration-200
              "
              style={{
                opacity: click ? 0 : 1
               }}
              >&nbsp;</span>

              <span className="
                absolute
                top-0
                inline-block
                w-full
                h-0.5
                bg-gray-500
                rounded
                transition-all
                ease
                duration-200
              "
               style={{ transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)" }}
              >&nbsp;</span>
          </div>
        </div>
        <Link href="https://www.facebook.com/search/top?q=center%20for%20urban%20agriculture%20and%20innovation"
        >
        <div className="hidden sm:flex justify-center items-center">
          <AiOutlineFacebook 
            className="hover:scale-125 transition-all ease duration-200"
            size={30} />
        </div>
      </Link>
      </button>

      {/* Mobile NAV */}
      <div className="
        w-[350px]
        py-3
        px-6
        sm:px-8
        border
        border-solid
        rounded-full
        font-medium
        capitalize
        items-center
        flex
        sm:hidden
        fixed
        top-6
        right-1/2
        translate-x-1/2
        backdrop-blur-sm
        z-50
        translate-all
        ease
        duration-200
        gap-5
        overflow-x-auto
        "
         style={{ top: click ? "1rem" : "-5rem" }}
        >
       {navLinks.map((item) => {
        return (
          <Link 
            href={item.href}
            key={item.id}
          >
            {item.links}
          </Link>
        )
       })}
      </div>

      {/* DESKTOP NAV */}
      <div className="
        sm:flex
        hidden
        w-max 
        py-3 
        px-8
        border-2
        border-solid 
        rounded-full 
        font-medium 
        justify-center 
        items-center 
        gap-10
        capitalize
        shadow-lg
        fixed
        top-6
        right-1/2
        translate-x-1/2
        bg-slate-50
        backdrop-blur-sm
        z-50
        ">
        {/* <Link href="/">Home</Link>
        <Link href="/about">Services</Link>
        <Link href="/products">Products</Link>
        <Link href="/">About us</Link> */}
        {/* {navLinks.map((item) => {
          return (
            <Link style={{  }}
              key={item.id}
              href={item.href}>
              {item.links}
            </Link>
          )
        })} */}

        {navLinks.map((item) => {
          return (
            <NavLinks 
              key={item.id}
              navLinks={item.links}
              links={item.href}
            />
          )
        })}
      </div>    
    </motion.div>
    </AnimatePresence>
  )
}

export default navbar