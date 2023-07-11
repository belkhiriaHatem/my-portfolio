import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Hatem",
      "guy-who-loves-techno.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        src={"/me.jpg"}
        alt="Author Pic"
        className="relative rounded-full border-[3px] border-[#222523]"
        width={72}
        height={72}
      />
      <div className="z-20">
        <h2 className="text-sm font-thin uppercase tracking-[12px] text-[#7d8679]">
          Software Engineer
        </h2>
        <h1 className="px-10 text-4xl font-semibold lg:text-5xl">
          <span>{text}</span>
          <Cursor cursorColor="#01b71f" />
        </h1>
        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
