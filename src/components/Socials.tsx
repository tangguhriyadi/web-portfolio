"use client";
import React from "react";
import Link from "next/link";
import { iconData } from "@/lib/data";

interface SocialsProps extends React.ComponentPropsWithRef<"div"> {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({
  containerStyles,
  iconStyles,
  ...restProps
}) => {
  return (
    <div className={`${containerStyles}`} {...restProps}>
      {iconData.map((icon, index) => {
        return (
          <Link key={index} href={icon.path} target="_blank">
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
