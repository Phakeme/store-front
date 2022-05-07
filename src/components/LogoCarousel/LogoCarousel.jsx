import React from "react";
import ZandoLogo from "../../images/elegant-logo.svg";
import GodlyLogo from "../../images/Gogly-logo.svg";
import WeddingLogo from "../../images/wedding-logo.svg";

export const LogoCarousel = () => {
  const data = [
    {
      image: ZandoLogo,
      path: "https://github.com/Phakeme/elegant-estore",
    },
    { image: GodlyLogo, path: "https://github.com/Phakeme/godly-search" },
    { image: WeddingLogo, path: "https://woza.vercel.app/" },
  ];

  return (
    <div className="h-[62px] grid grid-cols-3 gap-3 bg-white drop-shadow-md">
      {data?.map(({ path, image }, index) => (
        <a key={index} href={path} target="_blank" rel="noreferrer">
          <div className="flex justify-center items-center h-full">
            <img width="50%" src={image} alt="logo-preview" />
          </div>
        </a>
      ))}
    </div>
  );
};
