import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-3">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/belkhiriaHatem"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/belkhiriaHatem"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/belkhiriaHatem"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex cursor-pointer flex-row items-center text-gray-400"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="hidden text-sm font-thin uppercase text-[#01b71f] md:inline-flex">
            get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
