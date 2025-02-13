'use client';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';


export default function NavBar() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true)
  }
    return(
        <nav className="md:px-12 px-6 flex justify-between items-center py-4 border-b-2 relative">
          <Link href={'/'} rel="noopener noreferrer">
            <Image src="/logo.png" alt="logo" width={150} height={50.98} priority className="object-contain"></Image>
          </Link>  
          <AiOutlineMenu className="text-3xl fill-blue-900 md:hidden" onClick={handleToggle}/>

          {/* Desktop menu */}
          <div className="hidden md:flex md:gap-2">
            <Link href={`/jobs/`} rel="noopener noreferrer"><button className="px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">Apply <FaArrowRightLong className="text-sm"/></button></Link>
            <Link href={`/employer/`} rel="noopener noreferrer"><button className="px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">Hire <FaArrowRightLong className="text-sm"/></button></Link>
            <Link href={`/`} rel="noopener noreferrer"><button className="px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">About</button></Link>
            <Link href={`/`} rel="noopener noreferrer"><button className="px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">Contact</button></Link>
          </div>

          {/* Mobile menu */}
          {toggle && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 flex flex-col items-center gap-2 md:hidden">
              <Link href={`/jobs/`} rel="noopener noreferrer"><button className="px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">Apply <FaArrowRightLong className="text-sm"/></button></Link>
              <Link href={`/employer/`} rel="noopener noreferrer"><button className="px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">Hire <FaArrowRightLong className="text-sm"/></button></Link>
              <Link href={`/`} rel="noopener noreferrer"><button className="px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">About</button></Link>
              <Link href={`/`} rel="noopener noreferrer"><button className="px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">Contact</button></Link>
            </div>
          )}
        </nav>
    )
}