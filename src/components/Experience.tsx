import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly space-y-10 overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-[#7d8679]">
        Experience
      </h3>

      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-[#222523] scrollbar-thumb-[#01b71f]/80">
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
