'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineContentPasteSearch } from "react-icons/md";

export default function JobButton() {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#073D7F] py-4 px-6 rounded-xl w-fit"
      >
        <Link href="/jobs" target="_blank" rel="noopener noreferrer">
          <h1 className="text-2xl font-semibold">I want to apply</h1>
          <p>Find your next job</p>
          <div className="flex justify-between text-3xl pt-4">
            <FaArrowRightLong />
            <MdOutlineContentPasteSearch />
          </div>
        </Link>
      </motion.div>
    );
  }