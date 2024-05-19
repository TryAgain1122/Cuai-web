'use client';
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";
import { BiMoon } from "react-icons/bi";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
       <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
       >
        <BiMoon size={20}/>
       </button>
    </div>
  )
}

export default ThemeSwitch