import React from "react";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center py-[0px] md:py-[48px]">
      {/* Fixed width background container */}
      <div
        className="w-[1396px] h-[690px] flex items-center justify-center rounded-[25px] relative"
        style={{
          backgroundImage: "url('/image/hero-bg.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Content area max-w-[1210px] centered inside */}
        <div className="relative z-20 w-full max-w-[1210px] h-full flex flex-col md:flex-row md:items-center justify-between px-5 shadow-xl">
          <div className="w-full max-w-[638px] flex flex-col items-center md:items-start gap-[24px] md:gap-[36px]">
            <div className="flex flex-col items-center md:items-start gap-1">
              <h1 className="font-urbanist font-bold text-[36px] md:text-[64px] text-[#01081B] text-center md:text-left">
                Dravis lune corthar kinel MonksPay
              </h1>
              <img
                src="/image/hero-text-line.svg"
                alt="hero-text-line"
                className="w-[336px] md:w-[400px] h-[20px]"
              />
            </div>
            <p className="w-full max-w-[490px]font-outfit font-normal text-[16px] md:text-[18px] text-[#4D525F] text-center md:text-left">
              Zandrik flowen derithor lunex—plorma fintech railo mak. Dravis
              lune corthar kinel.
            </p>
            <div className="w-full max-w-[168px]">
              <Button
                text="Join our Waitlist"
                textColor="white"
                bgColor="#895BAB"
              />
            </div>
            <h1 className="font-urbanist font-normal text-[36px] text-[#01081B]">
                Coming Soon
              </h1>
          </div>
          <img
            src="/image/hero-img-right.svg"
            alt="hero-img-right"
            className="absolute top-[61%] md:top-[30%] right-[15%] md:right-[0%] w-[339px] md:w-[722px] h-[312px] md:h-[483px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
