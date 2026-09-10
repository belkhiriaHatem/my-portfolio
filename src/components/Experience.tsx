import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    logo: "/sato.webp",
    title: "Frontend-Focused Full-Stack Engineer",
    company: "SATORIPOP",
    dateText: "11/2021 - Present",
    bullets: [
      "Led React.js and Angular front-end architecture across ERP, POS and public-sector systems, coordinating with product, design and backend teams.",
      "Replaced polling with WebSocket-based real-time sync across ERP modules, cutting update latency by over 50%.",
      "Built an offline-first POS interface with Redux Offline and Service Workers, ensuring uninterrupted sales during network outages.",
      "Created a reusable component and hooks library that reduced feature development time by 30%.",
      "Delivered Angular scheduling, user management and reporting modules adopted by 40,000 agents at Tunisia's Ministry of Health.",
      "Directed frontend architecture for an installable PWA, replacing manual scheduling with a real-time Angular/RxJS calendar system.",
    ],
  },
];

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
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </motion.div>
  );
}