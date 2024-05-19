'use client';

import Image from "next/image";
import Container from "../Container";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/Navbar";

interface ProductProps {
    title: string;
    description: string;
    imageSrc: string;
    productSubtitle: string;
    productTitle: string;
    productDescription: string;
}

const page: React.FC<ProductProps> = ({ title, description, imageSrc, productSubtitle, productTitle, productDescription }) => {
  return (
    <div>
        <motion.section
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
        >
           <Navbar />
        <Container>
        <motion.div className="container px-5 py-24 mx-auto" 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }} 
                   
            >
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">Master Cleanse Reliac Heirloom</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-medium">Whatever cardigan tote  tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
            </div>
        <div className="grid 
                        sm:grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                        ">
            <div className="lg:w-[300px] sm:h-[300px] p-4">
            <motion.div className="flex relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                >
                <Image 
                    alt="gallery" 
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl shadow-md border-4 border-solid border-green-300 transition ease hover:scale-[1.1] duration-200" 
                    src="/images/img1.png"
                    fill
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 backdrop backdrop-blur-sm opacity-0 hover:opacity-100 transition-all ease hover:duration-300">
                <h2 className="tracking-widest text-lg title-font text-green-700 font-bold mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed font-bold">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
            </motion.div>
            </div>
            <div className="lg:w-[300px] sm:h-[300px] p-4">
            <motion.div className="flex relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                >
                <Image 
                    alt="gallery" 
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md border-4 border-solid border-green-300 transition ease hover:scale-[1.1] duration-200" 
                    src="/images/img2.png"
                    fill
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 backdrop backdrop-blur-sm opacity-0 hover:opacity-100 transition-all ease hover:duration-300">
                <h2 className="tracking-widest text-lg title-font text-green-700 font-bold mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
            </motion.div>
            </div>
            <div className="lg:w-[300px] sm:h-[300px] p-4">
            <motion.div className="flex relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                >
                <Image 
                    alt="gallery" 
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md border-4 border-solid border-green-300 transition ease hover:scale-[1.1] duration-200" 
                    src="/logo.png"
                    fill
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 backdrop backdrop-blur-sm opacity-0 hover:opacity-100 transition-all ease hover:duration-300">
                <h2 className="tracking-widest text-lg title-font text-green-700 font-bold mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
            </motion.div>
            </div>
            <div className="lg:w-[300px] sm:h-[300px] p-4">
            <motion.div className="flex relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                >
                <Image 
                    alt="gallery" 
                    className=" inset-0 w-full h-full object-cover object-center rounded-lg shadow-md border-4 border-solid border-green-300 transition ease hover:scale-[1.1] duration-200" 
                    src="/images/img3.png"
                    fill
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 backdrop backdrop-blur-sm opacity-0 hover:opacity-100 transition-all ease hover:duration-300">
                <h2 className="tracking-widest text-lg title-font text-green-700 font-bold mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
            </motion.div>
            </div>
            <div className="lg:w-[300px] sm:h-[300px] p-4">
            <motion.div className="flex relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                >
                <Image 
                    alt="gallery" 
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-md border-4 border-solid border-green-300 transition ease hover:scale-[1.1] duration-200" 
                    src="/logo.png"
                    fill
                    />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 backdrop backdrop-blur-sm opacity-0 hover:opacity-100 transition-all ease hover:duration-300">
                <h2 className="tracking-widest text-lg title-font text-green-700 font-bold mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
            </motion.div>
            </div>
        </div>
        </motion.div>
    </Container>
    </motion.section>
    </div>
  )
}

export default page