import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      image: "/vndit.jpg",
      description: "Vndit is an advanced ERP solution for Retailers.",
      title: "Vndit",
      visitable: true,
      url: "https://www.linkedin.com/company/vnditio/about/",
    },
    {
      image: "/vndit.jpg",
      description: "Vndit POS is an offline first POS PWA.",
      title: "Vndit POS",
      visitable: true,
      url: "https://www.linkedin.com/company/vnditio/about/",
    },
    {
      image: "/ems.png",
      description:
        "Employee Management System for the Tunisian Ministry of Health, handling admin and operational workflows.",
      title: "EMS",
      visitable: false,
      url: "",
    },
    {
      image: "/kreno2.webp",
      description:
        "A driving school management PWA with a feature-rich events calendar, built with Angular and Tailwind.",
      title: "Kreno2",
      visitable: true,
      url: "https://kreno2.enpc-ediser.com",
    },
    {
      image: "/connect-smart-drive.webp",
      description:
        "A ride-hailing application (similar to Uber/Bolt) with real-time driver/passenger sync and admin dashboard.",
      title: "Connect SmartDrive",
      visitable: true,
      url: "https://connect-smartdrive.com/en/",
    },
    {
      description: "A full-stack website for El Ferik, a restaurant and bar.",
      title: "El Ferik",
      visitable: true,
      url: "https://elferik.com",
    },
    {
      description:
        "A full-stack website for Hype Experience Bar, a restaurant and bar.",
      title: "Hype Experience Bar",
      visitable: true,
      url: "https://hypeexperiencebar.com",
    },
    {
      description: "A full-stack website for Jobi, a tapas bar.",
      title: "Jobi Tapas Bar",
      visitable: true,
      url: "https://jobitapasbar.com",
    },
    {
      description:
        "A portfolio website for Marwen Bayoudh, an interior architect.",
      title: "Bayoudh Marwen",
      visitable: true,
      url: "https://bayoudhmarwen.com",
    },
    {
      image: "/genio-logo.png",
      description:
        "GenioAI is an AI platform that generates Images, Videos, Sound tracks and more.",
      title: "GenioAI",
      visitable: true,
      url: "https://ai-solution-platform.vercel.app/",
    },
    {
      image: "/spotify-logo.png",
      description: "A fully functionnal Spotify Clone",
      title: "Spotify Clone",
      visitable: true,
      url: "https://spotify-clone-belkhiriahatem.vercel.app",
    },
    {
      image:
        "/twitter.jpg",
      description: "A fully functionnal Twitter Clone",
      title: "Twitter Clone",
      visitable: true,
      url: "https://twitter-clone-belkhiriahatem.vercel.app",
    },
    {
      image:
        "/emojis.png",
      description: "Chirp is a SM platform that allow only emoji posts.",
      title: "Chirp",
      visitable: true,
      url: "https://chirp-belkhiriahatem.vercel.app",
    },
  ];
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

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-[#222523] scrollbar-thumb-[#01b71f]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            {project.image ? (<motion.img
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-64 rounded-sm object-contain"
              src={project.image}
              alt={project.title}
            />) : null}

            <div className="max-w-6xl space-y-5 px-0 md:px-10">
              <h4 className="text-center text-4xl font-bold">
                <span className="text-[#01b71f]">Case Study {i + 1}:</span>{" "}
                {project.title}
              </h4>
              <h6 className="opacity-70">{project.description}</h6>
              {project.visitable ? (
                <p className="text-center text-lg md:text-left">
                  <span className="flex animate-bounce">👇</span> Visit:{" "}
                  <Link className="font-bold" href={project.url}>
                    {project.url}
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[300px] w-screen -skew-y-12 bg-[#7d8679]/10" />
    </motion.div>
  );
}
