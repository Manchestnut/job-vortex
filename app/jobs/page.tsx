'use client';
import { getJobs } from "@/sanity/sanity-utils"
import NavBar from "../NavBar";
import Link from "next/link";
import { motion } from "framer-motion";

export default async function Job() {
    const jobs = await getJobs();
    return(
        <>
        <NavBar />
        <div className="px-6 pt-10">
            <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">Job search</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 py-5 w-fit mx-auto">
                {jobs.map((job) => 
                    <Link key={job._id} href={`/jobs/${job.slug}`} rel="noopener noreferrer">
                    <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-100 p-4 m-3 rounded max-w-[450px]">
                        <h1 className="text-gray-800">{job.job_title}</h1>
                        <h3 className="text-gray-500 mb-8">{job.job_location}</h3>
                    </motion.div>
                    </Link>
                )}
            </div>
        </div>

        </>
    )
}