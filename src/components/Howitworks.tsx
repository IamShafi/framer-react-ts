import React from "react";
import Button from "./ui/Button";

const Howitworks = () => {
  return (
    <div className="w-full max-w-[1210px] mx-auto flex items-center justify-center flex-col py-[60px] md:py-[42px]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col">
          <h1 className="font-outfit font-bold text-[15px] md:text-[16px] text-[#3f6028] uppercase mb-1">
            How it works
          </h1>
          <h1 className="w-full max-w-[658px] font-urbanist font-bold text-[28px] md:text-[40px] text-[#01081B]">
            Darak vestal cronix ferlum via pro.
          </h1>
        </div>
        <Button text="Join our wishlist" textColor="white" bgColor="#895BAB" />
      </div>
      {/* Desktop Card-1*/}
      <div className="hidden md:flex w-full max-w-[837px] flex-row items-center justify-between mt-[30px] md:mt-[48px]">
        {/* Left Card */}
        <div className="flex items-center justify-center w-[350px] py-[35px]">
          <img
            src="/image/placeholder-image.svg"
            alt="placeholder-image"
            className="w-[350px] h-[229px]"
          />
        </div>
        {/* middle */}
        <div className="w-[30px] h-[299px]">
          <img
            src="/image/Timeline-1.png"
            alt="placeholder-image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Card */}
        <div className="w-full max-w-[350px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-inter font-bold text-[28px] text-[#141414]">
              Sign-up
            </h1>
            <p className="font-inter font-normal text-[16px] text-[#636363]">
              Veltra MonksID corth—secure, shard-bound, ready.
            </p>
          </div>
        </div>
      </div>
      {/* Desktop Card-2*/}
      <div className="hidden md:flex w-full max-w-[837px] flex-row items-center justify-between ">
        {/* Left Card */}
        <div className="w-full max-w-[350px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-inter font-bold text-[28px] text-[#141414]">
              Link Payment Method
            </h1>
            <p className="font-inter font-normal text-[16px] text-[#636363]">
              Brintor haldra metrix—cards, rails, grid tokens.
            </p>
          </div>
        </div>
        {/* middle */}
        <div className="w-[30px] h-[299px]">
          <img
            src="/image/Timeline-2.png"
            alt="placeholder-image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Card */}
        <div className="flex items-center justify-center w-[350px] py-[35px]">
          <img
            src="/image/placeholder-image.svg"
            alt="placeholder-image"
            className="w-[350px] h-[229px]"
          />
        </div>
      </div>
      {/* Desktop Card-3*/}
      <div className="hidden md:flex w-full max-w-[837px] flex-row items-center justify-between ">
        {/* Left Card */}
        <div className="flex items-center justify-center w-[350px] py-[35px]">
          <img
            src="/image/placeholder-image.svg"
            alt="placeholder-image"
            className="w-[350px] h-[229px]"
          />
        </div>
        {/* middle */}
        <div className="w-[30px] h-[299px]">
          <img
            src="/image/Timeline-3.png"
            alt="placeholder-image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Card */}
        <div className="w-full max-w-[350px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-inter font-bold text-[28px] text-[#141414]">
              Send & Receive
            </h1>
            <p className="font-inter font-normal text-[16px] text-[#636363]">
              Dravern syncs fremir. Zett up, flux done. Dashvex shows drith
              logs, latency burst maps, and real-time kernal paths.
            </p>
          </div>
        </div>
      </div>
      {/* Mobile Cards */}
      <div className="block md:hidden w-full max-w-[315px] mt-[30px]">
        {/* Mobile-card-1 */}
        <div className="flex items-center gap-[34px]">
          {/* Left Line */}
          <div className="w-[37px] h-[368px]">
            <img
              src="/image/Timeline-1.png"
              alt="placeholder-image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Card */}
          <div className="w-full max-w-[211px] flex flex-col gap-[25px]">
            {/* Text */}
            <div className="flex flex-col gap-[18px]">
              <h1 className="font-inter font-bold text-[28px] text-[#141414]">
                Sign-up
              </h1>
              <p className="font-inter font-normal text-[16px] text-[#636363]">
                Veltra MonksID corth—secure, shard-bound, ready.
              </p>
            </div>
            {/* Image */}
            <div className="flex items-center justify-center w-[211px] py-[35px]">
              <img
                src="/image/placeholder-image.svg"
                alt="placeholder-image"
                className="w-[211px] h-[165px]"
              />
            </div>
          </div>
        </div>
        {/* Mobile-card-2 */}
        <div className="flex items-center gap-[34px]">
          {/* Left Line */}
          <div className="w-[37px] h-[368px]">
            <img
              src="/image/Timeline-2.png"
              alt="placeholder-image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Card */}
          <div className="w-full max-w-[211px] flex flex-col gap-[25px]">
            {/* Text */}
            <div className="flex flex-col gap-[18px]">
              <h1 className="font-inter font-bold text-[28px] text-[#141414]">
                Sign-up
              </h1>
              <p className="font-inter font-normal text-[16px] text-[#636363]">
                Veltra MonksID corth—secure, shard-bound, ready.
              </p>
            </div>
            {/* Image */}
            <div className="flex items-center justify-center w-[211px] py-[35px]">
              <img
                src="/image/placeholder-image.svg"
                alt="placeholder-image"
                className="w-[211px] h-[165px]"
              />
            </div>
          </div>
        </div>
        {/* Mobile-card-3 */}
        <div className="flex items-center gap-[34px]">
          {/* Left Line */}
          <div className="w-[37px] h-[367px]">
            <img
              src="/image/Timeline-3.png"
              alt="placeholder-image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Card */}
          <div className="w-full max-w-[211px] flex flex-col gap-[25px]">
            {/* Text */}
            <div className="flex flex-col gap-[18px]">
              <h1 className="font-inter font-bold text-[28px] text-[#141414]">
                Sign-up
              </h1>
              <p className="font-inter font-normal text-[16px] text-[#636363]">
                Veltra MonksID corth—secure, shard-bound, ready.
              </p>
            </div>
            {/* Image */}
            <div className="flex items-center justify-center w-[211px] py-[35px]">
              <img
                src="/image/placeholder-image.svg"
                alt="placeholder-image"
                className="w-[211px] h-[165px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
