import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center px-10 text-center md:flex-row md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-[#7d8679]">
        Skills
      </h3>

      <h3 className="absolute top-28 text-xs uppercase tracking-[5px] text-[#7d8679]">
        Hover over a skill😌
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill prct={95} directionLeft={true} img="/react.png" />
        <Skill prct={80} directionLeft={true} img="/prisma.webp" />
        <Skill prct={90} directionLeft={true} img="/redux.png" />
        <Skill prct={75} directionLeft={true} img="/ts.png" />
        <Skill prct={85} directionLeft={true} img="/tailwind.jpg" />
        <Skill prct={80} directionLeft={true} img="/laravel.jpg" />
        <Skill prct={90} img="/mysql.png" />
        <Skill prct={70} img="/graphql.webp" />
        <Skill prct={85} img="/trpc.svg" />
        <Skill prct={90} img="/next.png" />
        <Skill prct={70} img="/mongodb.png" />
        <Skill prct={75} img="/django.png" />
      </div>
    </motion.div>
  );
}
