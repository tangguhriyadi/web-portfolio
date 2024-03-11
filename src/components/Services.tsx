import React from "react";

import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ServiceType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const serviceData: ServiceType[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Technical Standardization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non feugiat ligula. ",
  },
];

const Services: React.FC = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((data, index) => (
            <Card
              key={index}
              className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
            >
              <CardHeader className="text-primary absolute  -top-[60px]">
                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                  {data.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4 ">{data.title}</CardTitle>
                <CardDescription className="text-lg ">
                  {data.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
