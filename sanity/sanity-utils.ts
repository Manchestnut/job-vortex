import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config/client-config";
import { Job } from "@/app/types/Job";

export async function getJobs(): Promise<Job[]>{
    const client = createClient(clientConfig);
    return client.fetch(
        groq`*[_type == "job"]{
            _id,
            _createdAt,
            job_title,
            "slug": slug.current,
            job_description,
            job_location
        }`
    )
}