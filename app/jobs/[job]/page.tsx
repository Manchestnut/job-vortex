import { getJob } from "@/sanity/sanity-utils";
import NavBar from "@/app/NavBar";
import { PortableText } from "next-sanity";
import Footer from "@/app/Footer";
import JobApplicationForm from "@/app/ApplicationForm";

type Props = {
  params: Promise<{ job: string }>;
};

export default async function Job({ params }: Props) {
  const { job: slug } = await params;
  const job = await getJob(slug);

  return (
    <>
      <NavBar />
      <div className="px-6 pt-10">
        <h1 className="text-3xl font-bold mb-4 text-center">{job.job_title}</h1>
        <div className="px-6 pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg">
            <PortableText value={job.job_description}></PortableText>
          </div>
          <JobApplicationForm job={job} />
        </div>
      </div>
      <Footer />
    </>
  );
}
