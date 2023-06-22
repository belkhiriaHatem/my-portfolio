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
        src={
          "https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/176096472_2841982616050056_5189814825065724964_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H4Z2uEpu7nYAX-vHgGl&_nc_ht=scontent.ftun2-2.fna&oh=00_AfBJQmZ0lmzobOA3xUdOoVPQMEnShJhkuC6DFVyGeE9LRA&oe=64B7D8C6"
        }
        alt="Author Pic"
        className="md:h-95 -mb-20 h-32 w-32 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-64 md:w-64 md:rounded-lg"
      />
      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="font-thin text-[#01b71f]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
          laborum eveniet odio assumenda, similique hic rem, quam eaque
          quibusdam impedit ipsum in aperiam quis possimus quod expedita
          deleniti provident? Nesciunt. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iure, laborum eveniet odio assumenda, similique hic
          rem, quam eaque quibusdam impedit ipsum in aperiam quis possimus quod
          expedita deleniti provident? Nesciunt.
        </p>
      </div>
    </motion.div>
  );
}
