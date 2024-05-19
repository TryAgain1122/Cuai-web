'use client'

import Link from "next/link";

interface NavLinksProps {
    navLinks: string;
    links: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ navLinks,links }) => {
  return (
    <div className="
        flex
        flex-col
        items-center
        hover:text-slate-800
        hover:underline
        rounded-full
        transition
        ease
        duration-200
        cursor-pointer
        focus:bg-slate-400
        "
    >
        <Link href={links}>{navLinks}</Link>
    </div>
  )
}

export default NavLinks