"use client";
import Link from "next/link";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/lib/data";

const Work: React.FC = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto  text-center mb-12 flex flex-col justify-center items-center ">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Engaging in projects with diverse requirements and features enables
            us to adopt a broad perspective on technology.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="">
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
