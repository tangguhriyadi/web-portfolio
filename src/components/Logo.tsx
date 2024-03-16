import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/logo-tr.svg" width={54} height={54} priority alt="logo" />
    </Link>
  );
};

export default Logo;
