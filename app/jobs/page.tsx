import { getJobs } from "@/sanity/sanity-utils"
import NavBar from "../NavBar";

export default async function Job() {
    const jobs = await getJobs();
    return(
        <>
        <NavBar />
        <h1>Jobs</h1>
        
        {jobs.map((job) => <div key={job._id}>{job.job_title}</div>)}
        
        </>
    )
}