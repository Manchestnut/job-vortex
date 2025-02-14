import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { MdOutlineEngineering } from "react-icons/md";
import { BiHealth } from "react-icons/bi";
import { MdOutlineRoomService } from "react-icons/md";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { TbServerCog } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import EmployerForm from "./components/EmployerForm";

export default function Employer() {
  const features = [
    {
      title: "Cost Savings",
      text: "Stop overpaying for recruitment. If you're paying more than a 10% rate, we can help reduce costs significantly while handling the entire hiring process for you.",
      image: "/savings.svg",
      reverse: false,
    },
    {
      title: "Quality of Candidates",
      text: "We don’t just fill positions; we match top-tier talent with your company’s unique needs. Our extensive screening ensures you get the best.",
      image: "/engineer.svg",
      reverse: true,
    },
    {
      title: "Wider Talent Pool",
      text: "Gain access to a global talent network. We source from diverse industries and locations, bringing you the best professionals worldwide.",
      image: "/connected-world.svg",
      reverse: false,
    },
    {
      title: "Time Management",
      text: "Our automated and efficient recruitment system ensures faster placement without compromising quality.",
      image: "/time-management.svg",
      reverse: true,
    },
    {
      title: "Guaranteed Replacement",
      text: "We stand by our placements. If a candidate isn’t the right fit, we’ll replace them at no additional cost within the first 60 days.",
      image: "/hire.svg",
      reverse: false,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="px-6 py-12 w-full max-w-[900px] mx-auto">
        <section className="pb-10">
          <h1 className="md:text-4xl text-2xl font-bold mb-6">
            Find Your Next Talent with Job Vortex
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:text-left md:text-lg">
              At Job Vortex, we understand the challenges of recruitment.
              Finding the right candidate is time-consuming, costly, and
              sometimes frustrating. That’s where we step in. Our team is
              committed to delivering high-quality talent, streamlining the
              hiring process, and helping you build a workforce that drives
              success.
            </div>
            <Image
              className="w-full max-w-[300px] md:max-w-[400px] mx-auto md:mx-0"
              src="/people-search.svg"
              alt="about img"
              width={400}
              height={300}
              priority
            ></Image>
          </div>
        </section>
        <section className="pb-10 md:text-lg">
          <h1 className="md:text-4xl text-2xl font-bold mb-8 text-center md:text-left">
            Why Partner With Job Vortex?
          </h1>
          {features.map(({ title, text, image, reverse }, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center md:items-start md:gap-20 pb-6`}
            >
              <div className="w-full md:w-1/2 text-center md:text-left">
                <b>{title}</b> – {text}
              </div>
              <Image
                className="w-full max-w-[250px] md:max-w-[300px] mx-auto md:mx-0"
                src={image}
                alt={title}
                width={300}
                height={300}
                priority
              />
            </div>
          ))}
        </section>
        <section>
          <h1 className="md:text-4xl text-2xl font-bold mb-6">
            Industries We Serve
          </h1>
          <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="text-gray-800 font-semibold text-center text-md rounded py-10 border-2">
                <MdOutlineEngineering className="mx-auto text-6xl pb-2 text-gray-800" />
                <h3>Engineering</h3>
              </div>
              <div className="text-gray-800 font-semibold text-center text-md rounded py-10 border-2">
                <BiHealth className="mx-auto text-6xl pb-2 text-gray-800" />
                <h3>Healthcare</h3>
              </div>
              <div className="text-gray-800 font-semibold text-center text-md rounded py-10 border-2">
                <MdOutlineRoomService className="mx-auto text-6xl pb-2 text-gray-800" />
                <h3>Hospitality</h3>
              </div>
              <div className="text-gray-800 font-semibold text-center text-md rounded py-10 border-2">
                <MdOutlinePrecisionManufacturing className="mx-auto text-6xl pb-2 text-gray-800" />
                <h3>Manufacturing</h3>
              </div>
              <div className="text-gray-800 font-semibold text-center text-md rounded py-10 border-2">
                <TbServerCog className="mx-auto text-6xl pb-2 text-gray-800" />
                <h3>Information Technology</h3>
              </div>
              <div className="text-gray-800 font-semibold text-center text-md rounded py-10 border-2">
                <FaChartLine className="mx-auto text-6xl pb-2 text-gray-800" />
                <h3>Finance</h3>
              </div>
              <div className="text-gray-800 font-semibold text-center text-md rounded py-10 border-2">
                <FaShoppingCart className="mx-auto text-6xl pb-2 text-gray-800" />
                <h3>E-commerce and Retail</h3>
              </div>
              <div className="text-gray-800 font-semibold text-center text-md rounded py-10 border-2">
                <FaBullhorn className="mx-auto text-6xl pb-2 text-gray-800" />
                <h3>Marketing and Advertising</h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*CONTACT FORM */}
      <EmployerForm />
      <Footer />
    </>
  );
}
