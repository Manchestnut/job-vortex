'use client';
import { useState } from "react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { Job } from "./types/Job";

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
    const [search, setSearch] = useState("");
  
    // Filter jobs based on title, category, or location
    const filteredJobs = jobs.filter((job) =>
      [job.job_title, job.job_category, job.job_location]
        .some((field) => field.toLowerCase().includes(search.toLowerCase()))
    );
  
    return (
      <div className="px-3 py-2 w-full mx-auto border-t-2 border-t-gray-300">
        <input
          type="text"
          placeholder="Search jobs by title, field, or location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Link key={job._id} href={`/jobs/${job.slug}`} rel="noopener noreferrer">
              <div className="bg-white py-5 px-5 mt-2 flex flex-col md:flex-row justify-between items-start md:items-center rounded shadow hover:shadow-md cursor-pointer transition duration-300">
                <h2 className="text-lg font-semibold text-gray-800 md:w-1/3">{job.job_title}</h2>
                <p className="text-gray-600 md:w-1/3">{job.job_category}</p>
                <p className="text-gray-600 md:w-1/3 flex items-center">
                  <CiLocationOn className="inline mr-1" />
                  {job.job_location}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600 text-center">No jobs found.</p>
        )}
      </div>
    );
  }
