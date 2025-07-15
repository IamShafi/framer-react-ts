import React from "react";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <div className="w-full max-w-[1210px] mx-auto flex items-center justify-center flex-col py-[60px] md:py-[48px]">
      <div
        className="w-full max-w-[1397px] h-[690px] flex items-center justify-center rounded-[25px]"
        style={{
          backgroundImage: "url('/image/hero-bg.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-20 w-full max-w-[1210px] h-full flex flex-col md:flex-row md:items-center justify-between px-5 shadow-2xl rounded-[25px]">
          <div className="w-full max-w-[638px] flex flex-col  gap-[36px]">
            <div className="flex flex-col items-start gap-1">
              <h1 className="font-urbanist font-bold text-[36px] md:text-[64px] text-[#01081B]">
                Dravis lune corthar kinel MonksPay
              </h1>
              <img
                src="/image/hero-text-line.svg"
                alt="hero-text-line"
                className="w-[336px] md:w-[400px] h-[20px]"
              />
            </div>
            <p className="font-outfit font-normal text-[16px] md:text-[18px] text-[#4D525F]">
              Zandrik flowen derithor lunex—plorma fintech railo mak. Dravis
              lune corthar kinel.
            </p>
            <div className="w-full max-w-[168px]">
              <Button
                text="Join our wishlist"
                textColor="white"
                bgColor="#492860"
              />
            </div>
          </div>
          <img
            src="/image/hero-img-right.svg"
            alt="hero-img-right"
            className="w-[722px] h-[483px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
