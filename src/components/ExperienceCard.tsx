import Image from "next/image";
import React from "react";

export default function ExperienceCard() {
  return (
    <article className="flex w-[300px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-5 overflow-hidden rounded-lg bg-[#222523] p-8 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <img
        src={"/sato.webp"}
        alt="Company Logo"
        className="relative h-16 w-16 rounded-full border-[3px] border-[#222523] object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Web Developer</h4>
        <p className="mt-1 text-2xl font-bold">SATORIPOP</p>
        <div className="my-2 flex items-center space-x-2">
          <img
            className="h-8 w-8 object-contain"
            alt="xdxd"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          />
          <img
            className="h-8 w-8 object-contain"
            alt="xdxd"
            src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png"
          />
          <img
            className="h-8 w-8 object-contain"
            alt="xdxd"
            src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
          />
          <img
            className="h-8 w-8 object-contain"
            alt="xdxd"
            src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
          />
          <img
            className="h-8 w-8 object-contain"
            alt="xdxd"
            src="https://www.freepnglogos.com/uploads/php-logo-png/php-logo-png-transparent-svg-vector-bie-supply-1.png"
          />
          <img
            className="h-8 w-8 object-contain"
            alt="xdxd"
            src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
          />
        </div>
        <p className="py-5 text-sm font-thin uppercase text-[#01b71f]">
          Started work 01/11/2021 - Now
        </p>

        <ul className="ml-5 list-disc space-y-2 text-sm">
          <li>Developed and maintained responsive web applications.</li>
          <li>
            Conducted code reviews and merged pull requests, improving code
            quality.
          </li>
          <li>
            Proficiently contribute to all stages of the software development
            life cycle.
          </li>
          <li>
            Leverage expertise in ReactJS to create responsive, visually
            appealing, and user-friendly frontend interfaces.
          </li>
          <li>
            Actively engage in team dialogues, ideation sessions, and technical
            parleys, engendering the exchange of insights, resolution of
            challenges, and the cultivation of a collaborative ethos.
          </li>
        </ul>
      </div>
    </article>
  );
}
