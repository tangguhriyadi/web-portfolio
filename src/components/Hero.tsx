import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero: React.FC = () => {
  return (
    <section className="py-12 xl:py-24 h-[95vh] lg:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Engineer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Tangguh Riyadi</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              A succinct yet comprehensive summary shedding light on my
              background, career path, and the professional activities I am
              involved in.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link href="/CV_ATS_24_04_2024.pdf" target="_blank">
                <Button variant="secondary" className="gap-x-2">
                  Download Resume <Download size={18} />
                </Button>
              </Link>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              endCountNum={2}
              badgeText="Years Of Experience"
              icon={<RiBriefcase4Fill />}
              containerStyles="absolute top-[24%] -left-[5rem]"
            />
            <Badge
              endCountNum={10}
              badgeText="Finished Projects"
              icon={<RiTodoFill />}
              containerStyles="absolute top-[80%] -left-[1rem]"
            />
            <Badge
              endCountNum={9}
              badgeText="Happy Clients"
              endCountText="k"
              icon={<RiTeamFill />}
              containerStyles="absolute top-[55%] -right-8"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              imgSrc="/hero/developer.png"
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-0 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
