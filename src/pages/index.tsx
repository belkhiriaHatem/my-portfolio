import Header from "~/components/Header";
import Head from "next/head";
import Link from "next/link";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Experience from "~/components/Experience";
import Skills from "~/components/Skills";
import Projects from "~/components/Projects";
import ContactMe from "~/components/ContactMe";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[#1a1b18] text-[#eeeeec] scrollbar-thin scrollbar-track-[#222523] scrollbar-thumb-[#01b71f]/80">
      <Head>
        <title>H4T3M - @dev</title>
        <meta name="description" content="H4T3M - @dev" />
        <link rel="icon" href="/business-man.png" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HomeIcon className="h-10 w-10 cursor-pointer rounded-full transition-all hover:scale-95 hover:opacity-70" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
