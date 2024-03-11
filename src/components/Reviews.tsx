"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type ReviewType = {
  avatar: string | StaticImageData;
  name: string;
  job: string;
  review: string;
};

const reviewsData: ReviewType[] = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((data, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4 ">
                    <Image
                      src={data.avatar}
                      width={70}
                      height={70}
                      alt=""
                      priority
                    />
                    <div className="flex flex-col">
                      <CardTitle>{data.name}</CardTitle>
                      <p>{data.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {data.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
