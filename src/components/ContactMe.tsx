import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // SEND EMAIL
    console.log(formData);
    return null;
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-[#7d8679]">
        Contact Me📲
      </h3>

      <div className="flex flex-col space-y-8">
        <h4 className="text-center text-4xl font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-[#01b71f]">
            Let&apos;s Talk.
          </span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-6 w-6 animate-pulse text-[#01b71f]" />
            <p className="text-xl">+216 28 330 720</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-6 w-6 animate-pulse text-[#01b71f]" />
            <p className="text-xl">hatembelkhiria@yahoo.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-6 w-6 animate-pulse text-[#01b71f]" />
            <p className="text-xl">Monastir, Tunisia</p>
          </div>
        </div>

        {/* <form
          onSubmit={() => handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              disabled={true}
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              disabled={true}
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            disabled={true}
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            disabled={true}
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            cols={30}
            rows={3}
          />
          <button
            disabled={true}
            type="submit"
            className="rounded-md bg-[#01b71f] py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-[#01b71f]/90 active:bg-[#01b71f]/90"
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
}
