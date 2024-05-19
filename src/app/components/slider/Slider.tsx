'use client';

import Container from "@/app/Container";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './Slider.css';
import { motion } from "framer-motion";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiPhoneCall } from "react-icons/bi";
import Footer from "./Footer";
import Link from "next/link";
import Feature from "./Feature";

const ApiSlider = [
  {
    src: "/images/cuai.jpg",
    active: true,
      content: {
        h1: "Center for Urban Agriculture and Innovation",
        p: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray."
      }
  },

  {
    src: '/images/greenTech.jpg', 
    // active: true,
    content: {
        h1: "GreenTech Innovations and Associations",
        p: "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray."
    },
    background: " bg-[#D4D5CF]"
  },
]

const Slider = () => {
  const [slides] = useState(ApiSlider);
  const [activeSlide, setActiveSlide] = useState(0);
  
  const nextSlide = () => {
    if (activeSlide === slides.length -1) {
      setActiveSlide(0);
    }
    else {
      setActiveSlide(activeSlide + 1);
    }
  }

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1); 
    }
    else {
      setActiveSlide(activeSlide - 1);
    }
  }
  return (
   <div>
    <Container>
      
      {slides.map((slide, index) => {
        if (index === activeSlide) {
        return (
          <>
            <section className="">
              <div className={`wrapper mx-auto flex px-5 py-24 md:flex-row flex-col items-center shadow-lg rounded-md`}
              >
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-2xl">
                
                  <motion.div
                   initial={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{
                     duration: 0.3,
                     ease: [0, 0.71, 0.2, 1.01],
                     scale: {
                       type: "spring",
                       damping: 5,
                       stiffness: 100,
                       restDelta: 0.001
                     }
                   }}
                  >
                    <Image 
                      className="object-cover object-center w-full rounded-full shadow-lg" 
                      alt="hero" 
                      src={slide.src} 
                      width={500}
                      height={500}  
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  className="absolute inset-0 flex justify-between items-center text-white m-2" onClick={prevSlide}>
                    <div className="bg-green-500 p-2 rounded-full shadow-md hover:cursor-pointer hover:scale-[1.1] ease duration-200 hover:bg-slate-50 hover:text-black">
                      <AiOutlineArrowLeft size={30}/>
                    </div>
                    <div className="bg-green-500 p-2 rou  nded-full shadow-md cursor-pointer hover:scale-[1.1] ease duration-200 hover:bg-slate-50 hover:text-black" onClick={nextSlide}>
                      <AiOutlineArrowRight size={30}/>
                    </div>
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ x: "100%"}}
                  animate={{ x: "0%" }}
                  
                  className="
                    lg:flex-grow 
                    md:w-1/2 
                    lg:pl-24 
                    md:pl-16 
                    flex 
                    flex-col 
                    md:items-start 
                    md:text-left 
                    items-center 
                    text-center">
                      
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
                    {slide.content.h1}
                  </h1>
                  <p className="mb-8 leading-relaxed">{slide.content.p}</p>

                  {/* SOCIAL MEDIA ICONS */}
                  <div className="flex flex-row gap-4">
                    <Link href={"https://web.facebook.com/centerforurbanagri"} className="hover:cursor-pointer">
                      <AiFillFacebook size={40} className="text-blue-500"/>
                    </Link>
                    <FcGoogle size={40}/>
                  <div className="flex items-center justify-center gap-3 font-medium">
                      <BiPhoneCall size={40}/>
                      <p>0927 116 8609</p>
                    </div>

                  </div>
                </motion.div>
                
              </div>
            </section>
          </>
        )
        }
      })}
      <Feature />
      <Footer />
    </Container>
   </div>
    
  )
}

export default Slider