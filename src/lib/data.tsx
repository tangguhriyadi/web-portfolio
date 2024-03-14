import {
  RiGithubFill,
  RiLinkedinFill,
  RiMediumFill,
  RiTelegramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import {
  InfoDataType,
  ProjectType,
  QualificationType,
  ServiceType,
  SocialIconType,
} from "./type";
import {
  Blocks,
  Calendar,
  GanttChartSquare,
  Gem,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";

export const projectData: ProjectType[] = [
  {
    image: "/work/lh-figma.png",
    category: "next js",
    name: "Learnhub SaaS",
    description:
      "Learning Platform that allows us to learn anywhere and anytime with anyone.",
    link: "https://registration.learnhub.id",
  },
  {
    image: "/work/mdl.png",
    category: "node js",
    name: "myDigiLearn SaaS",
    description:
      "Learning platform with the most complete types of digital learning content in Indonesia.",
    link: "https://mydigilearn.id",
  },
  {
    image: "/work/anime.png",
    category: "react js",
    name: "Anime Collection",
    description: "A simple project provides many anime TV, movies, comics, etc.",
    link: "https://animecollectionfield.vercel.app/",
    github: "https://github.com/tangguhriyadi/react-ts-animation",
  },
  {
    image: "/work/motio-npm.png",
    category: "react js",
    name: "Motiolibs NPM",
    description:
      "An UI library (reactjs)  many componts for project/product needs.",
    link: "https://www.npmjs.com/package/@motiolibs/motio-js",
  },
  {
    image: "/work/smarsol.png",
    category: "react js",
    name: "Smart Soulution v1",
    description:
      "IoT platform which provides asset or device monitoring system.",
    link: "https://smartsol.id",
  },
  {
    image: "/work/apotek.png",
    category: "fullstack",
    name: "Apotek Asli Express App",
    description: "An Inventory and HR management application for pharmacies.",
    link: "https://app.apotekasli.net",
  },
  {
    image: "/work/iot-dm.png",
    category: "react js",
    name: "IOT Device Mangement",
    description:
      "IoT platform which provides customer premises equipment monitoring system.",
    link: "https://m2m.lintasarta.net",
  },
  {
    image: "/work/binar-car.png",
    category: "react js",
    name: "Binar Car Rental",
    description:
      "Car Rental Application.",
    github:
      "https://github.com/tangguhriyadi/Binar-Challenge-Platinum-Customer",
  },
];

export const serviceData: ServiceType[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Technical Standardization",
    description:
      "Establishing and implementing best practice, guidelines, and protocols aimed at enhancing code quality and adherence to industry standards. ",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Encompassing the creation, enhancement, and maintenance of websites and web applications.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Involving the design, development, and deployment of backend applications tailored to meet specific business needs or consumer demands",
  },
];

export const iconData: SocialIconType[] = [
  {
    path: "https://www.linkedin.com/in/muhammad-tangguh-riyadi-b0a36a194/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/tangguhriyadi",
    name: <RiGithubFill />,
  },
  {
    path: "https://medium.com/@mtangguh97",
    name: <RiMediumFill />,
  },
  {
    path: "https://wa.me/+6282116780425",
    name: <RiWhatsappFill />,
  },
  {
    path: "https://t.me/tangguhriyadi97",
    name: <RiTelegramFill />,
  },
];

export const infoData: InfoDataType[] = [
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

export const qualificationData: QualificationType[] = [
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

export const skillData: QualificationType[] = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Javascript, Typescript, Go",
      },
      {
        name: "Frontend Development",
      },
      {
        name: "ReactJS NextJS",
      },
      {
        name: "Backend Development",
      },
      {
        name: "NestJS ExpressJS",
      },
      {
        name: "PostgreSQL MongoDB Redis",
      },
      {
        name: "Docker",
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
        imgPath: "/docker.svg",
      },
      {
        imgPath: "/sql.svg",
      },
    ],
  },
];
