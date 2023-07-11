import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
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

      <h3 className="absolute top-28 text-xs uppercase tracking-[5px] text-[#7d8679]">
        Professional projects are not included
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-[#222523] scrollbar-thumb-[#01b71f]/80">
        <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44">
          <motion.img
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-64 rounded-sm object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/768px-Logo_of_Twitter.svg.png"
            alt="projectI"
          />
          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-4xl font-thin">
              <span className="underline decoration-[#01b71f]">
                Case Study 1:
              </span>{" "}
              Twitter Clone
            </h4>
            <p className="text-center text-lg md:text-left">
              <span className="flex animate-bounce">👇</span> Visit:{" "}
              <Link
                className="font-bold"
                href={"https://twitter-clone-pi-lemon.vercel.app"}
              >
                https://twitter-clone-pi-lemon.vercel.app
              </Link>
            </p>
          </div>
        </div>
        <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44">
          <motion.img
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-64 rounded-sm object-contain"
            src="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTk0NDkyNDU0MjY1NjkzODcz/emoji-meaning.webp"
            alt="projectII"
          />
          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-4xl font-thin">
              <span className="underline decoration-[#01b71f]">
                Case Study 2:
              </span>{" "}
              Chirp: Emojis Only
            </h4>
            <p className="text-center text-lg md:text-left">
              <span className="flex animate-bounce">👇</span> Visit:{" "}
              <Link
                className="font-bold"
                href={"https://chirp-eight-beige.vercel.app"}
              >
                https://chirp-eight-beige.vercel.app
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-[30%] h-[300px] w-screen -skew-y-12 bg-[#7d8679]/10" />
    </motion.div>
  );
}
