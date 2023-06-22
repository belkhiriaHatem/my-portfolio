import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: Boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src="https://i.pinimg.com/564x/39/b2/e4/39b2e4ad77c23a2c11e5950a7dfa2aec.jpg"
        className="h-20 w-20 rounded-full border-[5px] border-[#222523] object-contain filter transition duration-300 ease-in-out group-hover:grayscale xl:h-24 xl:w-24"
      />
      <div className="absolute left-[5px] top-[5px] h-[70px] w-[70px] rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 xl:h-[86px] xl:w-[86px]">
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
