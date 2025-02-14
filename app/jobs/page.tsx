import { getJobs } from "@/sanity/sanity-utils"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import JobList from "./components/JobList";

export default async function Job() {
    const jobs = await getJobs();
    return(
        <>
        <NavBar />
        <div className="md:px-6 pt-10 bg-gray-50 min-h-screen">
          <h1 className="md:text-5xl text-3xl font-bold text-center mb-8 text-gray-800">Job Search</h1>
          <JobList jobs={jobs} />
        </div>
        <Footer />
      </>
    )
}