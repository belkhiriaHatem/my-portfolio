import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        scale: [1, 2, 2, 3, 1],
      }}
      transition={{ duration: 3 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-72 h-[200px] w-[200px] animate-ping rounded-full border border-[#7d8679] opacity-20" />
      <div className="absolute mt-72 h-[300px] w-[300px] animate-ping rounded-full border border-[#7d8679] opacity-20" />
      <div className="absolute mt-72 h-[500px] w-[500px] animate-ping rounded-full border border-[#7d8679] opacity-20" />
      <div className="absolute mt-72 h-[500px] w-[500px] animate-pulse rounded-full border border-[#01b71f] opacity-20" />
    </motion.div>
  );
}
