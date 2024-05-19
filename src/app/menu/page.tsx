'use client'
import { useState } from "react";
import { motion, Variants } from "framer-motion";

 const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); 

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="w-[300px] shadow-md"
            >
            <button onClick={toggle}>
                Menu
                <div>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg> 
                </div>
            </button>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
        </motion.nav>
    </div>
  )
}

export default Menu;


