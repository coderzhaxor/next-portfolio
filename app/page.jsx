"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { TitleSection } from "@/components/TitleSection";

import certificates from "@/api/certificates";
import projects from "@/api/projects";
import logos from "@/api/logos";
import "boxicons";

const slideUp = {
  init: {
    opacity: 0,
    y: "100%",
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.3 },
  },
  withdelay: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.3 },
  },
};

const icons = [
  { label: "HTML", url: "https://januantara.is-a.dev/assets/svg/css-logo.svg" },
  { label: "CSS", url: "https://januantara.is-a.dev/assets/svg/css-logo.svg" },
  {
    label: "Javascript",
    url: "https://januantara.is-a.dev/assets/svg/js-logo.svg",
  },
  {
    label: "SASS",
    url: "https://januantara.is-a.dev/assets/svg/sass-logo.svg",
  },
  {
    label: "React JS",
    url: "https://januantara.is-a.dev/assets/svg/reactjs-logo.svg",
  },
  {
    label: "Next JS",
    url: "https://januantara.is-a.dev/assets/svg/nextjs-logo.svg",
  },
  {
    label: "Figma",
    url: "https://januantara.is-a.dev/assets/svg/figma-logo.svg",
  },
  { label: "Git", url: "https://januantara.is-a.dev/assets/svg/git-logo.svg" },
  {
    label: "Bootstrap",
    url: "https://januantara.is-a.dev/assets/svg/bootstrap-logo.svg",
  },
  {
    label: "Tailwind",
    url: "https://januantara.is-a.dev/assets/svg/tailwind-logo.svg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white/70 pt-24 w-full antialiased">
      <div className="max-w-5xl mx-auto">
        <SectionHero />
        <SectionSkills />
        <SectionProject />
        <SectionCertificates />
      </div>
    </main>
  );
}

function SectionHero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row px-6 md:px-0 items-center gap-x-0"
    >
      <div className="hero-description">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
          className="mb-4 text-green-500/80 font-semibold text-lg block bg-black/10 w-fit rounded-md border border-white/10 px-4 py-2"
        >
          ✨ I'm open for work
        </motion.span>
        <div className="h-max overflow-hidden">
          <motion.h1
            variants={slideUp}
            initial={"init"}
            animate={"open"}
            className="text-4xl font-bold title"
          >
            I strive to create beatiful and useful things
          </motion.h1>
        </div>
        <div className="mt-4 max-w-[592px] overflow-hidden">
          <motion.p
            variants={slideUp}
            initial={"init"}
            animate={"withdelay"}
            className="text-lg text-white/50 font-normal pr-1"
          >
            Hola! My name is{" "}
            <span className="title font-semibold">Alif Januantara Prima</span>,
            a very funny-looking visual design enthusiast. I do web design and
            web development. Feel free to surf around 👋
          </motion.p>
        </div>

        <div className="flex mt-10 gap-x-6 items-center">
          <Link
            href="/resume"
            className="px-4 py-2 text-lg text-gray-800 bg-gradient-to-br from-slate-400 hover:bg-gradient-to-tr transition-color duration-300 to-white rounded-full font-bold shadow"
          >
            View Resume
          </Link>
          <Link href="/contacts">Contact Me</Link>
        </div>
      </div>

      {/* <div className="hero-backgrounds border-l border-white/5 h-full pl-4">
          <div className="education">
              <h3 className='text-3xl font-semibold mb-2'>Education</h3>
              <p className='text-base text-white/50'>Univesitas Informatika dan Bisnis Indonesia (2021 - present)</p>
          </div>
          <div className="experience mt-6">
            <h3 className='text-3xl font-semibold mb-2'>Experience</h3>
            <p className='text-base text-white/50'>Study Independent at PT. Kinemasystrans Multimedia (Infinite Learning)</p>
          </div>
      </div> */}
    </section>
  );
}

function SectionSkills() {
  return (
    <section id="skill" className="my-24 px-6">
      <TitleSection title={"Skills"} emoticon={"💻"} margin={true} />
      <div className="container-details flex-1 mt-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {logos.map((icon, index) => (
            <div
              className="logo p-6 relative bg-white/5 hover:bg-white/10 rounded-md flex-center group"
              key={index}
            >
              <Image
                src={icon.path}
                alt={icon.name}
                width={36}
                height={36}
                loading="lazy"
                className={`grayscale group-hover:grayscale-0 transition-all duration-300 ${icon.invert ? "invert group-hover:invert-0" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionProject() {
  return (
    <section id="projects" className="mt-18 px-6">
      <TitleSection
        title={"Featured Projects"}
        emoticon={"🚀"}
        className={"mb-8"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:px-0 mt-10">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            images={project.images}
            label={project.label}
            github={project?.github}
            preview={project?.preview}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>

      <div className="w-full flex justify-end mt-4">
        <Link href={"/projects"} className="flex gap-x-2 items-center">
          View All
          <box-icon name="right-arrow-alt" color={"#ffffff80"}></box-icon>
        </Link>
      </div>
    </section>
  );
}

function SectionCertificates() {
  return (
    <section id="certificates" className="px-6">
      <TitleSection title={"Certificates"} emoticon={"🏆"} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 md:gap-10 px-6 md:px-0 mt-10">
        {certificates.map((certificate) => (
          <div className="certificate">
            <div className="certificate-images w-full h-[250px] overflow-hidden rounded-t-xl mb-4 bg-white/5 pt-6 px-6 hover:px-0 hover:pt-0 transition-all duration-300">
              <img
                src={certificate.images}
                alt={certificate.description}
                key={certificate.id}
                className="h-full w-full rounded-t-md"
              />
            </div>
            <div className="certificate-body">
              <h1 className="text-white/70 font-semibold text-xl">
                {certificate.description}
              </h1>
              <p className="my-2 text-green-700 font-medium">
                {certificate.category.join(` — `)}
              </p>
              <p className="text-white/50 text-base">{certificate.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
