import NavBar from "@/app/NavBar";
import { getJob } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";


type Props = {
    params: {
      job: string;
    };
  };

export default async function Job({ params }: Props) {
    const slug = params.job;
    const job = await getJob(slug);
    return(
        <>
        <NavBar />
        <h1>{job.job_title}</h1>
        <PortableText value={job.job_description}></PortableText>
        </>
    )
}