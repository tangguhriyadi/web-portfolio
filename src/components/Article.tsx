"use client";
import Link from "next/link";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleCard from "./ArticleCard";
import { articleData } from "@/lib/data";

const Article: React.FC = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto  text-center mb-12 flex flex-col justify-center items-center ">
          <h2 className="section-title mb-4">Articles</h2>
          <p className="subtitle mb-8 xl:w-[500px]">
            You'll find a collection of insightful articles covering a wide
            range of topics in technology, programming, and more. Each article
            is crafted with care to provide valuable insights, tutorials, and
            best practices.
          </p>
          <Link href="https://medium.com/@mtangguh97" target="_blank">
            <Button>More Articles</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="">
          <Swiper
            className="min-h-[480px]"
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
            {articleData.map((article, index) => (
              <SwiperSlide key={index}>
                <ArticleCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Article;
