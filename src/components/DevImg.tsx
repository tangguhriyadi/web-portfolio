import Image from "next/image";
import React from "react";
interface DevImgProps {
  containerStyles?: string;
  imgSrc: string;
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        fill
        priority
        src={imgSrc}
        alt="tangguh image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default DevImg;
