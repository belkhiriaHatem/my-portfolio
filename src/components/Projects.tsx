import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-[#7d8679]">
        Projects👨‍🔧
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#01b71f]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-64 rounded-sm object-contain"
              src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/website-768x297.png"
              alt="project"
            />
            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="underline decoration-[#01b71f]">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>
              <p className="text-center text-lg md:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                voluptatibus cupiditate expedita, nemo minus molestiae nulla
                omnis nam tempore repellendus veniam est ab, optio ad recusandae
                aliquam deleniti ut. At?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[300px] w-screen -skew-y-12 bg-[#7d8679]/10" />
    </motion.div>
  );
}
