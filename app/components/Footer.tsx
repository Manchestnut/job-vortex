import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 p-6 border-t-2 text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
        {/* Logo Section */}
        <div className="flex justify-center">
        <Link href="/" rel="noopener noreferrer">
          <Image
            src="/logo.svg"
            alt="logo"
            width={150}
            height={50}
            className=""
          />
        </Link>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left">
          <p className="font-semibold">Follow Us</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="https://www.facebook.com/jobvortex"
              aria-label="Facebook"
              className="text-xl hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/job-vortex/"
              aria-label="LinkedIn"
              className="text-xl hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="font-semibold">Contact Us</p>
          <div>
            <span className="text-gray-500">For Employers: </span>
            <div className="flex items-center gap-1">
              <MdOutlineEmail />
              <a
                href="mailto:info@jobvortex.com"
                className="hover:underline"
              >
                info@jobvortex.com
              </a>
            </div>
          </div>
          <div>
            <span className="text-gray-500">For Applicants: </span>
            <div className="flex items-center gap-1">
              <MdOutlineEmail />
              <a
                href="mailto:career@jobvortex.com"
                className="hover:underline"
              >
                career@jobvortex.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 mt-6">
        <p>© 2025 Job Vortex. All rights reserved.</p>
      </div>
    </footer>
  );
}
