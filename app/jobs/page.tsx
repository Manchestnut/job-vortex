import { getJobs } from "@/sanity/sanity-utils"
import NavBar from "../NavBar";
import Footer from "../Footer";
import JobList from "../JobList";

export default async function Job() {
    const jobs = await getJobs();
    return(
        <>
        <NavBar />
        <div className="px-6 pt-10 bg-gray-50 min-h-screen">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">Job Search</h1>
          <JobList jobs={jobs} />
        </div>
        <Footer />
      </>
    )
}