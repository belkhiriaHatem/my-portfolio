import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ExperienceCard() {
  return (
    <article className="flex w-[300px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-5 overflow-hidden rounded-lg bg-[#222523] p-8 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <img
        src={
          "https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/176096472_2841982616050056_5189814825065724964_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H4Z2uEpu7nYAX-vHgGl&_nc_ht=scontent.ftun2-2.fna&oh=00_AfBJQmZ0lmzobOA3xUdOoVPQMEnShJhkuC6DFVyGeE9LRA&oe=64B7D8C6"
        }
        alt="Author Pic"
        className="relative h-16 w-16 rounded-full border-[3px] border-[#222523] object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">CEO of Noursoft</h4>
        <p className="mt-1 text-2xl font-bold">Noursoft</p>
        <div className="my-2 flex space-x-2">
          <img
            className="w-10 object-cover"
            alt="xdxd"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          />
          <img
            className="w-10 object-cover"
            alt="xdxd"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          />
          <img
            className="w-10 object-cover"
            alt="xdxd"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          />
        </div>
        <p className="py-5 text-sm font-thin uppercase text-[#01b71f]">
          Started work... - Ended...
        </p>

        <ul className="ml-5 list-disc space-y-2 text-sm">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
