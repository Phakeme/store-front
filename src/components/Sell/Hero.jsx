import React from "react";
import HeroImage from "../../images/sell/codealotbg.jpg";

export const Hero = () => {
  return (
    <div
      className="h-[400px] bg-center flex"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex items-center">
        <div
          className=" text-white p-6 w-[560px]"
          style={{ background: "rgba(11, 121, 191, 0.9)" }}
        >
          <div className="mb-3">
            <h1 className="text-[48px] font-bold">
              Join SA's Best Online Portfolio Project
            </h1>
            <h2 className="text-[24px]">
              Sell to over 3 million happy shoppers
            </h2>
          </div>
          <div className="">
            <a href="#selling">
              <div className="px-6 p-3 rounded border w-fit cursor-pointer hover:bg-white hover:text-blue font-bold">
                Start selling
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
