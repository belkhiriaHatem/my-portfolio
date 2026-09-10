import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-[#7d8679]">
        {"About"}
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={"/me.jpg"}
        alt="Author Pic"
        className="md:h-95 -mb-20 h-32 w-32 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-64 md:w-64 md:rounded-lg"
      />
      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-4xl font-thin">
          About{" "}
          <span className="text-4xl font-extrabold text-[#01b71f]">me</span>
        </h4>
        <p className="text-base">
          Frontend-Focused Full-Stack Engineer with 4+ years of experience building and
          shipping web applications end to end — from React.js/Next.js, Angular
          front-end architecture to Node.js, Laravel, and Python backend
          services and REST APIs.
        </p>
      </div>
    </motion.div>
  );
}
