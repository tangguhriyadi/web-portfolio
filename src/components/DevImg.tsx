import Image from "next/image";
import React from "react";
interface DevImgProps {
  containerStyles?: string;
  imgSrc: string;
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image fill priority src={imgSrc} alt="tangguh image" />
    </div>
  );
};

export default DevImg;
