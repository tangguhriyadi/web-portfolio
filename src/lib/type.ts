import { StaticImageData } from "next/image";

export type ProjectType = {
  image: string | StaticImageData;
  categories: string[];
  name: string;
  description: string;
  link?: string;
  github?: string;
};

export type ServiceType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type SocialIconType = {
  path: string;
  name: React.ReactNode;
};

export type InfoDataType = {
  icon: React.ReactNode;
  text: string;
};

export type QualificationType = {
  title: string;
  data: Record<string, string>[];
};

export type ReviewType = {
  avatar: string | StaticImageData;
  name: string;
  job: string;
  review: string;
  link:string
};
