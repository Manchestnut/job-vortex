import Image from "next/image";
import { MdOutlineEngineering } from "react-icons/md";
import { BiHealth } from "react-icons/bi";
import { MdOutlineRoomService } from "react-icons/md";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { TbServerCog } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import JobButton from "./JobButton";
import HireButton from "./HireButton";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className="bg-[#F1F1F1]">
    {/* Navigation */}
      <NavBar />

    {/* Landing */}
    <main className="">
      <div className="text-center w-fit mx-auto py-10 text-gray-800">
        <h1 className="font-extrabold md:text-6xl text-4xl py-8">Connecting talent <br/>with< br/> opportunity.</h1>
        <p className="text-2xl font-light">Let us help you find your perfect match!</p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-12 w-fit mx-auto text-[#F1F1F1]">
          <JobButton />
          <HireButton />
      </div>

      {/* About Us */}
      <div className="lg:p-24 md:p-12 p-6 min-w-72">
        <div className="bg-[#073D7F] md:rounded-2xl rounded-br-[150px] rounded-tl-[100px] lg:px-20 p-10 lg:grid lg:grid-cols-2 md:grid-cols-1">
          <div className="md:pt-10">
            <h1 className="lg:text-6xl md:text-3xl text-2xl font-extrabold pb-14 text-white">Experts in Recruitment <br/>Across Diverse Industries</h1>
            <p className="lg:text-2xl  text-white md:pb-12">
            Job Vortex is your trusted partner in recruitment, offering honest and tailored support to connect job seekers with the right employers. <br/> <br/>Our experienced team specializes in services such as job postings, candidate sourcing, interviewing, and specialized headhunting.
            </p>
          </div>
          <div className="md:ml-auto">
          <Image src="/about.png" alt="about img" width={500} height={500} className="relative rounded-br-[100px] -bottom-10 -right-10 lg:-top-10 lg:-right-20 lg:rounded-bl-full lg:rounded-tl-none lg:rounded-br-none "></Image>
          </div>
        </div>
      </div>

      {/* Industries Served */}
      <div className="w-fit mx-auto py-20 px-4">
        <h1 className="text-center text-6xl font-extrabold mb-20">Industries we&apos;ve served</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="bg-blue-800 text-white font-semibold text-center text-md rounded-2xl py-10 ">
          <MdOutlineEngineering className="mx-auto text-6xl pb-2"/>
            <h3>Engineering</h3>
          </div>
          <div className="bg-blue-800 text-white font-semibold text-center text-md rounded-2xl py-10">
          <BiHealth className="mx-auto text-6xl pb-2"/>
            <h3>Healthcare</h3>
          </div>
          <div className="bg-blue-800 text-white font-semibold text-center text-md rounded-2xl py-10">
          <MdOutlineRoomService className="mx-auto text-6xl pb-2"/>
            <h3>Hospitality</h3>
          </div>
          <div className="bg-blue-800 text-white font-semibold text-center text-md rounded-2xl py-10">
          <MdOutlinePrecisionManufacturing className="mx-auto text-6xl pb-2"/>
            <h3>Manufacturing</h3>
          </div>
          <div className="bg-blue-800 text-white font-semibold text-center text-md rounded-2xl py-10">
          <TbServerCog className="mx-auto text-6xl pb-2"/>
            <h3>Information Technology</h3>
          </div>
          <div className="bg-blue-800 text-white font-semibold text-center text-md rounded-2xl py-10">
          <FaChartLine className="mx-auto text-6xl pb-2"/>
            <h3>Finance</h3>
          </div>
          <div className="bg-blue-800 text-white font-semibold text-center text-md rounded-2xl py-10">
          <FaShoppingCart className="mx-auto text-6xl pb-2"/>
            <h3>E-commerce and Retail</h3>
          </div>
          <div className="bg-blue-800 text-white font-semibold text-center text-md rounded-2xl py-10">
          <FaBullhorn className="mx-auto text-6xl pb-2"/>
            <h3>Digital Marketing</h3>
          </div>
        </div>
      </div>
    </main>
    </div>

  );
}
