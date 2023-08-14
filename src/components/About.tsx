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
        src={"/me2.jpg"}
        alt="Author Pic"
        className="md:h-95 -mb-20 h-32 w-32 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-64 md:w-64 md:rounded-lg"
      />
      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-4xl font-thin">
          About{" "}
          <span className="text-4xl font-extrabold text-[#01b71f]">me</span>
        </h4>
        <p className="text-base">
          Highly skilled web developer with a proven track record in developing
          responsive and scalable web applications. With over 2 years of
          full-stack development experience, I have a unique understanding of
          both front and back-end systems. I&apos;ve successfully led a team to
          increase website conversion rates by 25% by improving UX/UI design.
          I&apos;m seeking a challenging role to leverage my skills to
          contribute to innovative web solutions.
        </p>
      </div>
    </motion.div>
  );
}
