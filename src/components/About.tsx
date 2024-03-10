import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
import React from "react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

type InfoDataType = {
  icon: React.ReactNode;
  text: string;
};

type QualificationType = {
  title: string;
  data: Record<string, string>[];
};

const infoData: InfoDataType[] = [
  {
    icon: <User2 size={20} />,
    text: "Muhammad Tangguh Riyadi",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+6282116780425",
  },
  {
    icon: <MailIcon size={20} />,
    text: "mtangguh97@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Feb, 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Management",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Bandung, Indonesia",
  },
];

const qualificationData: QualificationType[] = [
  {
    title: "education",
    data: [
      {
        university: "Bandung State of Polytechnique",
        qualification: "Bachelor of Management",
        years: "2015 - 2019",
      },
      {
        university: "Binar Academy",
        qualification: "Frontend Engineering",
        years: "2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "PT Richeese Kuliner Indonesia",
        role: "Asset Staff",
        years: "2019 - 2020",
      },
      {
        company: "PT Tricada Intronik",
        role: "Frontend Engineer",
        years: "2022",
      },
      {
        company: "PT Motiolabs Digitial Indonesia",
        role: "Software Engineer",
        years: "2022 - present",
      },
    ],
  },
];

const skillData: QualificationType[] = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Frontend Development",
      },
      {
        name: "Javascript, Typescript, Go",
      },
      {
        name: "Backend Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About: React.FC = () => {
  const getData = (
    datas: QualificationType[],
    title: string,
  ): QualificationType | undefined => {
    return datas.find((data) => data.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8 ">
                {/* personal info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for over 10 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I Specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((data, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{data.icon}</div>
                          <div>{data.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Indonesia, Sundanese</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience")?.title}
                          </h4>
                        </div>
                        {/* lists */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience")?.data.map(
                            (data, index) => {
                              const { company, role, years } = data;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absoulte -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education")?.title}
                          </h4>
                        </div>
                        {/* lists */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education")?.data.map(
                            (data, index) => {
                              const { university, qualification, years } = data;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absoulte -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills & tools */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8"> What I Use Everyday </h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2"> Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* lists */}
                      <div>
                        {getData(skillData, "skills")?.data.map(
                          (data, index) => {
                            const { name } = data;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h3>
                      <div className="border-b border-border mb-4"></div>
                      {/* lists */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map(
                          (data, index) => {
                            const { imgPath } = data;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  alt="tools"
                                  width={48}
                                  height={48}
                                  priority
                                />
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
