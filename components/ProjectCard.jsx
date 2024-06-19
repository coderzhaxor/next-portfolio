import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  images,
  label,
  title,
  github,
  preview,
  description,
  stack,
  id,
}) => {
  return (
    <Link
      href={`/projects/${id}`}
      className="project rounded-xl overflow-y-hidden flex flex-col bg-white/5 border border-white/5 pb-4 group hover:scale-105 transition-all duration-300"
    >
      <div className="project-images w-full h-[200px]">
        <img src={images} className="w-full h-full" alt={title} />
        {/* <Image 
                src={images} 
                alt={title} 
                layout='responsive' 
                className='w-full' 
                loading='lazy'
                style={
                    {
                        maxWidth: '100%',
                        height: 'auto',
                    }
                } 
            /> */}
      </div>
      <div className="project-label px-2 md:px-4 flex flex-wrap gap-2 my-4 *:px-2 *:py-1 *:border *:border-white/5 *:rounded-full *:bg-white/5 text-xs">
        {label.map((value, index) => (
          <span key={index}>#{value}</span>
        ))}
      </div>
      <div className="project-body px-2 mb-4 md:px-4">
        <h1 className="project-title text-xl mb-2 gap-x-2 font-semibold flex items-center">
          {title}
          <div className="line h-[1px] flex-1 bg-white/10"></div>
          {github && (
            <Link href={github} target="_blank">
              <box-icon type="logo" name="github" color="#ffffff50"></box-icon>
            </Link>
          )}
          {preview && (
            <Link href={preview} target="_blank">
              <box-icon name="link-external" color="#ffffff50"></box-icon>
            </Link>
          )}
        </h1>
        <p className="project-description text-sm text-white/50">
          {description}{" "}
          <Link
            href={`/projects/${id}`}
            className="text-green-800 font-semibold underline inline-flex gap-x-0 items-center group-hover:text-green-700"
          >
            See Details
          </Link>
        </p>
      </div>
      <hr className="mt-auto border-white/5 mb-4" />
      <div className="project-footer px-2 md:px-4 gap-x-2 flex">
        {stack.map((stack, index) => (
          <span
            title={stack.name}
            className="stack-outer size-8 border border-white/5 rounded-md p-1 flex items-center justify-center"
            key={index}
          >
            <box-icon
              type="logo"
              name={stack.logo}
              color={stack.color ?? "#ffffff50"}
            ></box-icon>
          </span>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
