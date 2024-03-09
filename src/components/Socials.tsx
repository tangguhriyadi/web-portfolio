"use client";
import React from "react";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiMediumFill,
} from "react-icons/ri";
import Link from "next/link";

interface SocialsProps extends React.ComponentPropsWithRef<"div"> {
  containerStyles?: string;
  iconStyles?: string;
}

type SocialIconType = {
  path: string;
  name: React.ReactNode;
};

const icons: SocialIconType[] = [
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiMediumFill />,
  },
];

const Socials: React.FC<SocialsProps> = ({
  containerStyles,
  iconStyles,
  ...restProps
}) => {
  return (
    <div className={`${containerStyles}`} {...restProps}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
