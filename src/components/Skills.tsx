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
        <Skill prct={95} img="/react.png" />
        <Skill prct={90} img="/next.png" />
        <Skill prct={85} img="/ts.png" />
        <Skill prct={90} img="/redux.png" />
        <Skill prct={85} img="/tailwind.jpg" />
        <Skill prct={75} img="/angular.svg" />
        <Skill prct={90} img="/node.webp" />
        <Skill prct={80} img="/python.webp" />
        <Skill prct={85} img="/laravel.jpg" />
        <Skill prct={75} img="/symfony.webp" />
        <Skill prct={80} img="/prisma.webp" />
        <Skill prct={80} img="/trpc.svg" />
        <Skill prct={90} img="/postgresql.webp" />
        <Skill prct={90} img="/mysql.png" />
        <Skill prct={75} img="/firebase.png" />
        <Skill prct={70} img="/azure.jpg" />
      </div>
    </motion.div>
  );
}