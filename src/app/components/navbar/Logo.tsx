'use client';

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center flex-row">
        <div className="w-12 md:w-16 overflow=hidden mr-2 md:mr-1">
            <Image 
                src="/logo.png"
                width={50}
                height={50}
                alt="logo"
            className="rounded-full border border-solid border-dark shadow-md"
            />
        </div>
        <span className="font-bold text-xl md:text-lg">Center for Urban Agriculture in Innovation</span>
    </Link>
  )
}

export default Logo