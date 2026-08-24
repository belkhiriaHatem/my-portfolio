import Image from "next/image";
import React from "react";

interface ExperienceCardProps {
  logo: string;
  title: string;
  company: string;
  dateText: string;
  bullets: string[];
}

export default function ExperienceCard({
  logo,
  title,
  company,
  dateText,
  bullets,
}: ExperienceCardProps) {
  return (
    <article className="flex w-[300px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-5 overflow-hidden rounded-lg bg-[#222523] p-8 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <img
        src={logo}
        alt={`${company} Logo`}
        className="relative h-16 w-16 rounded-full border-[3px] border-[#222523] object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{title}</h4>
        <p className="mt-1 text-2xl font-bold">{company}</p>
        {/* <div className="my-2 flex items-center space-x-2">
          {techIcons.map((icon, index) => (
            <img
              key={index}
              className="h-8 w-8 object-contain"
              alt="tech icon"
              src={icon}
            />
          ))}
        </div> */}
        <p className="py-5 text-sm font-thin uppercase text-[#01b71f]">
          {dateText}
        </p>

        <ul className="ml-5 list-disc space-y-2 text-sm">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}