"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

interface NavProps extends React.ComponentPropsWithRef<"div"> {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyle?: string;
}

type linkType = {
  path: string;
  name: string;
};

const links: linkType[] = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyle,
  ...restProps
}) => {
  const pathname = usePathname();
  return (
    <div className={`${containerStyles}`} {...restProps}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === pathname && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyle}`}
              ></motion.span>
            )}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
