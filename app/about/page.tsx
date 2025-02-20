import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Job Vortex</title>
        <meta
          name="description"
          content="Learn more about Job Vortex, a leading recruitment agency."
        />
        <meta
          name="keywords"
          content="recruitment, hiring, job seekers, employers"
        />
        <meta name="author" content="Job Vortex" />
        <meta property="og:title" content="About Us - Job Vortex" />
        <meta
          property="og:description"
          content="Find your perfect job with Job Vortex."
        />
        <meta property="og:image" content="/business-deal.svg" />
        <meta property="og:url" content="https://jobvortex.com/about" />
      </Head>

      <NavBar />

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/business-deal.svg"
            alt="Recruitment process illustration"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="w-full md:w-1/2 max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Job Vortex</span>, a
            recruitment agency dedicated to connecting job seekers and employers
            for the perfect match. We understand that finding the right job or
            the ideal employee can be a challenge, which is why we offer
            tailored recruitment solutions to streamline the process.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our team consists of experienced recruiters who specialize in
            full-cycle hiring services for a wide range of industries. From
            sourcing top-tier candidates to managing interviews, we ensure that
            companies find the best talent while job seekers secure the right
            opportunities.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our services include job postings, candidate sourcing, interviews,
            and specialized headhunting. Whether you're hiring or job hunting,
            Job Vortex is here to help—anywhere in the world.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
