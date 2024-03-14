"use client";
import React, { useCallback, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { reviewsData } from "../lib/data";
import Link from "next/link";

const Reviews: React.FC = () => {
  const handleImageClick = useCallback<() => void>(() => {}, []);
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
                  <Link href={data.link} target="_blank">
                    <div
                      onClick={() => handleImageClick()}
                      className="flex items-center gap-x-4 "
                    >
                      <Image
                        src={data.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                        className="rounded-full w-[70px] h-[70px] cursor-pointer"
                      />
                      <div className="flex flex-col">
                        <CardTitle>{data.name}</CardTitle>
                        <p>{data.job}</p>
                      </div>
                    </div>
                  </Link>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground italic">
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
