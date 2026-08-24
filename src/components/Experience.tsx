import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    logo: "/freelance.webp",
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    dateText: "Started 04/2026 - Now",
    bullets: [
      "Design and build custom websites for restaurants, real estate agencies, and local businesses using Next.js, Node.js, and PostgreSQL.",
      "Own the full project lifecycle — from client requirements gathering and UI design through deployment and post-launch support.",
      "Develop fast, SEO-friendly, responsive front ends with Next.js integrated with PostgreSQL-backed Node.js services.",
      "Manage client relationships directly, handling scope, timelines, and ongoing maintenance across multiple concurrent projects.",
    ],
  },
  {
    logo: "/sato.webp",
    title: "Web Developer",
    company: "SATORIPOP",
    dateText: "11/2021 - 04/2026",
    bullets: [
      "Built and shipped full-stack web applications end to end, owning React.js front-end architecture and Node.js/Laravel backend APIs.",
      "Designed and integrated REST APIs connecting front-end applications to backend services and third-party systems.",
      "Took ownership of technical decision-making on project structure and architecture, independently selecting libraries and tools.",
      "Maintained clean, well-structured, documented code through code reviews and clean-code practices.",
      "Managed full development cycles including deployment and production release, working autonomously in a fast-paced team.",
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