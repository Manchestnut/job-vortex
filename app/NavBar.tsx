import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";


export default function NavBar() {
    return(
        <nav className="bg-blue-100 p-3 flex justify-between items-center py-6">
          <Link href={'/'} rel="noopener noreferrer"><Image src="/logo.png" alt="logo" width={150} height={100}></Image></Link>  

          <AiOutlineMenu className="text-3xl fill-blue-900 lg:hidden"/>
          <div className="lg:flex gap-6 px-4 hidden">
            <a><button className="bg-[#F1F1F1] px-3 py-1 rounded-xl flex items-center gap-2 text-xl">Apply <FaArrowRightLong /></button></a>
            <a><button className="bg-[#F1F1F1] px-3 py-1 rounded-xl flex items-center gap-2 text-xl">Hire <FaArrowRightLong /></button></a>
          </div>
        </nav>
    )
}