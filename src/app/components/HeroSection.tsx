'use client';

import Image from "next/image"
import Container from "../Container"
import { motion } from "framer-motion"
import { AiOutlineFacebook } from 'react-icons/ai'
import Link from "next/link";
const HeroSection = () => {
  return (
    <div>
    <Container>
    <motion.div className="text-black font-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Container 
                mx-auto 
                flex 
                px-5 
                py-24 
                md:flex-row 
                flex-col
                items-center
                ">
                    <motion.div className="
                        lg:max-w-lg
                        lg:w-full
                        md:w-1/2
                        w-5/6
                        mb-10
                            md:mb-0
                        "
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        exit={{ opacity: 0 }}
                        >
                        <Image 
                            src="/logo.png"
                            alt="image"
                            width={500}
                            height={500}
                            className="object-cover object-center rounded-full shadow-lg
                            hover:scale-[1.1]
                            transition-all
                            ease duration-200 cursor-pointer"
                            />
                    </motion.div>
                        <motion.div className="
                            lg:flex-grow 
                            md:w-1/2 lg:pl-24 
                            md:pl-16 
                            flex 
                            flex-col 
                            md:items-start 
                            md:text-left 
                            items-center 
                            text-center
                            "
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                            exit={{ opacity: 0 }}
                            >
                                <h1 className="
                                    title-font 
                                    sm:text-4xl 
                                    text-3xl 
                                    mb-4 
                                    font-bold 
                                    text-gray-900">
                                        Before They Sold out
                                    </h1>
                                    <br className="hidden lg:inline-block" />readymade gluten
                                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                                    <Link href="#" className="rounded-full">
                                      <AiOutlineFacebook size={30}
                                    className="transition ease hover:scale-[1.1] duration-200"
                                    />
                                    </Link>   
                        </motion.div>           
                </div>
    </motion.div>
    </Container>
    </div>
  )
}

export default HeroSection