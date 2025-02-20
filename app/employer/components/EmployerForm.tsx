"use client";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

export default function EmployerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    job_title: "",
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

      const response = await fetch("/api/hire", {
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
      <div className="border-gray-300 p-6 w-full max-w-[900px] mx-auto">
        <h1 className="md:text-4xl text-2xl font-bold mb-6">Contact Us</h1>
        <h1 className="text-xl font-semibold mb-6">Your Details</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                className="w-full border-b-2 border-gray-300 p-3 focus:outline-none focus:border-blue-500"
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
                className="w-full border-b-2 border-gray-300 p-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-medium">Your Company Name</label>
            <input
              type="text"
              value={formData.company_name}
              onChange={handleChange}
              name="company_name"
              className="w-full border-b-2 border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Job Title</label>
            <input
              type="text"
              value={formData.job_title}
              onChange={handleChange}
              name="job_title"
              className="w-full border-b-2 border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="md:w-1/3 w-full bg-[#154c79] text-white rounded p-3"
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
    </>
  );
}
