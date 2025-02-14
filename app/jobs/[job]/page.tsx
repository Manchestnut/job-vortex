import { getJob } from "@/sanity/sanity-utils";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import JobApplicationForm from "@/app/jobs/[job]/components/ApplicationForm";
import { PortableText, PortableTextComponents } from "next-sanity";
import { PortableTextComponentProps } from "@portabletext/react";

type Props = {
  params: Promise<{ job: string }>;
};

// Define custom components for PortableText
const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }: PortableTextComponentProps<unknown>) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: PortableTextComponentProps<unknown>) => (
      <h2 className="text-3xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }: PortableTextComponentProps<unknown>) => (
      <h3 className="text-2xl font-semibold my-2">{children}</h3>
    ),
    h4: ({ children }: PortableTextComponentProps<unknown>) => (
      <h4 className="text-xl font-medium my-2">{children}</h4>
    ),
    normal: ({ children }: PortableTextComponentProps<unknown>) => (
      <p className="text-base my-2">{children}</p>
    )
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<unknown>) => (
      <ul className="list-disc ml-5">{children}</ul>
    ),
    number: ({ children }: PortableTextComponentProps<unknown>) => (
      <ol className="list-decimal ml-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextComponentProps<unknown>) => (
      <li className="ml-2">{children}</li>
    ),
    number: ({ children }: PortableTextComponentProps<unknown>) => (
      <li className="ml-2">{children}</li>
    ),
  },
};


export default async function Job({ params }: Props) {
  const { job: slug } = await params;
  const job = await getJob(slug);

  return (
    <>
      <NavBar />
      <div className="md:px-6 px-2 pt-10">
        <h1 className="text-3xl font-bold mb-4 text-center">{job.job_title}</h1>
        <div className="md:px-6 pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" rounded p-4">
            <PortableText value={job.job_description} components={portableTextComponents}></PortableText>
          </div>
          <JobApplicationForm job={job} />
        </div>
      </div>
      <Footer />
    </>
  );
}
