import { getJob } from "@/sanity/sanity-utils";
import NavBar from "@/app/NavBar";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{ job: string }>;
};

export default async function Job({ params }: Props) {
  const { job: slug } = await params;
  const job = await getJob(slug);

  return (
    <>
      <NavBar />
      <h1>{job.job_title}</h1>
      <PortableText value={job.job_description}></PortableText>
    </>
  );
}
