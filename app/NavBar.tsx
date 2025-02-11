import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";


export default function NavBar() {
    return(
        <nav className="md:px-12 px-4 flex justify-between items-center py-6 border-b-2">
          <Link href={'/'} rel="noopener noreferrer">
            <Image src="/logo.png" alt="logo" width={150} height={50.98} priority className="object-contain"></Image>
          </Link>  
          <AiOutlineMenu className="text-3xl fill-blue-900 lg:hidden"/>
          <div className="lg:flex gap-2 hidden">
            <Link href={`/jobs/`} rel="noopener noreferrer"><button className=" px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">Apply <FaArrowRightLong className="text-sm"/></button></Link>
            <Link href={`/hire/`} rel="noopener noreferrer"><button className=" px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">Hire <FaArrowRightLong className="text-sm"/></button></Link>
            <Link href={`//`} rel="noopener noreferrer"><button className=" px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">About</button></Link>
            <Link href={`//`} rel="noopener noreferrer"><button className=" px-3 py-1 rounded-lg flex items-center gap-2 text-lg text-gray-700 hover:underline">Contact</button></Link>
          </div>
        </nav>
    )
}