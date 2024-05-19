'use client';

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.div 
      initial={{ opacity : 0 }}
      animate={{ opacity : 1 }}
    className="w-full h-[100vh] flex justify-center items-center p-5 bg-slate-900 text-white uppercase text-lg">This is contact page</motion.div>
  )
}

export default contact