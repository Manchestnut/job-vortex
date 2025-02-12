'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuUserRoundSearch } from "react-icons/lu";

export default function JobButton() {
    return (
      <Link href={`hire`} rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#154c79] py-4 px-6 rounded-xl min-w-[225px]"
      >
            <h1 className="text-2xl font-semibold">I want to hire</h1>
            <p>Find your next candidate</p>
            <div className="flex justify-between text-3xl pt-4">
              <FaArrowRightLong />
              <LuUserRoundSearch />
            </div>
      </motion.div>
      </Link>
    );
  }