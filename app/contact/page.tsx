"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const grecaptcha = window.grecaptcha;

      if (!grecaptcha) {
        alert("reCAPTCHA failed to load.");
        return;
      }

      const token = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "submit" }
      );

      const recaptchaResponse = await fetch("/api/validateRecaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const recaptchaData = await recaptchaResponse.json();
      if (!recaptchaData.success) {
        alert("reCAPTCHA validation failed. Please try again.");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>Contact Us - Job Vortex</title>
        <meta
          name="description"
          content="Get in touch with Job Vortex for recruitment solutions."
        />
        <meta
          name="keywords"
          content="contact, recruitment, hiring, job seekers, employers"
        />
        <meta name="author" content="Job Vortex" />
        <meta property="og:title" content="Contact Us - Job Vortex" />
        <meta
          property="og:description"
          content="Find your perfect job with Job Vortex."
        />
        <meta property="og:image" content="/message.svg" />
        <meta property="og:url" content="https://jobvortex.com/contact" />
      </Head>
      <NavBar />
      <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-12 py-8 md:max-w-[1200px] mx-auto">
        <div className="w-full md:w-1/2 flex md:justify-center">
          <Image
            src="/message.svg"
            alt="contact"
            width={400}
            height={400}
            priority
            className="object-cover"
          />
        </div>
        <div className="border-gray-300 p-6 w-full max-w-lg md:max-w-[600px] mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left">
            Contact Us
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  className="w-full border-b-2 border-gray-300 p-3 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className="w-full border-b-2 border-gray-300 p-3 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 p-3 focus:outline-none h-32"
                required
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="w-full md:w-1/3 bg-[#154c79] text-white rounded p-3"
                disabled={loading}
              >
                {loading ? (
                  <ImSpinner2 className="animate-spin inline-block" />
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
