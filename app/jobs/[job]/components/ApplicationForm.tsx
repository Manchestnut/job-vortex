"use client";
import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

interface JobApplicationFormProps {
  job: {
    job_title: string;
  };
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ job }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    resume: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "file") {
      const file = e.target.files?.[0];

      if (file) {
        const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        
        if (!allowedTypes.includes(file.type)) {
          setError("Only PDF and DOCX files are allowed.");
          setFormData({ ...formData, resume: null });
          return;
        }
        
        setError(""); // Clear error if valid
        setFormData({ ...formData, resume: file });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.resume) {
      setError("Please upload a valid PDF or DOCX file.");
      return;
    }
    setLoading(true);

    // reCAPTCHA validation
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
      setLoading(false);
      return;
    }

    // actual form
    const formDataObj = new FormData();
    formDataObj.append("full_name", formData.full_name);
    formDataObj.append("email", formData.email);
    formDataObj.append("contact_number", formData.contact_number);
    formDataObj.append("job_title", job.job_title);
    if (formData.resume) {
      formDataObj.append("resume", formData.resume);
    }

    const response = await fetch("/api/apply", {
      method: "POST",
      body: formDataObj,
    });

    if (response.ok) {
      alert("Application submitted successfully!");
    } else {
      alert("Error submitting application.");
    }
    setLoading(false);
  };

  return (
    <div className="border-2 border-gray-300 rounded p-6">
      <h1 className="text-xl font-bold mb-6">Submit your Application</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            name="full_name"
            className="w-full border-2 border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border-2 border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            className="w-full border-2 border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500"
            value={formData.contact_number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Resume (PDF or DOCX only)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.docx"
            className="w-full border-2 border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-[#154c79] text-white rounded p-3"
          disabled={loading}
        >
          {loading ? (
            <ImSpinner2 className="animate-spin inline-block" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
