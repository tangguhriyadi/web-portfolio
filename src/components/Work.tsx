"use client";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard, { ProjectType } from "./ProjectCard";

const projectData: ProjectType[] = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Webiste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Nexa Webiste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Nexa Webiste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Nexa Webiste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Nexa Webiste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Nexa Webiste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Nexa Webiste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Nexa Webiste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
    link: "/",
    github: "/",
  },
];

const Work: React.FC = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non feugiat ligula.{" "}
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
