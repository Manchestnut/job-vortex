import Image from "next/image";
import JobButton from "./components/JobButton";
import HireButton from "./components/HireButton";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Navigation */}
        <NavBar />

        {/* Landing */}
        <main className="">
          <div className="text-center w-fit mx-auto py-10 text-gray-800">
            <h1 className="font-extrabold md:text-6xl text-4xl py-8">
              Connecting talent <br />
              with
              <br /> opportunity.
            </h1>
            <p className="text-2xl font-light">
              Let us help you find your perfect match!
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-12 w-fit mx-auto text-[#F1F1F1]">
            <JobButton />
            <HireButton />
          </div>

          {/* About Us */}
          <div className="w-fit mx-auto md:flex gap-6 py-36 px-8">
            <div className="max-w-[550px] mx-auto">
              <h1 className="md:text-4xl text-2xl font-extrabold text-gray-800">
                Experts in Recruitment Across Diverse Industries
              </h1>
              <div className="md:text-xl text-gray-800 pb-8 pt-4 md:pb-4">
                <p className="pb-2">
                  Job Vortex is your trusted partner in recruitment, offering
                  honest and tailored support to connect job seekers with the
                  right employers.
                </p>
                <p>
                  Our experienced team specializes in services such as job
                  postings, candidate sourcing, interviewing, and specialized
                  headhunting.
                </p>
              </div>
            </div>
            <Image
              src="/interview.svg"
              alt="about img"
              width={500}
              height={500}
              priority
            ></Image>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
