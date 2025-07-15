const Footer = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between gap-10 py-6 px-5">
      <div className="w-full flex flex-col gap-[32px]">
        {/* left vs right */}
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-[30px] justify-between">
          <div className="flex flex-col gap-3">
            <img
              src="/logo/Logo.png"
              alt="logo"
              className="cursor-pointer w-[166px] h-[42px]"
            />
            <p className="font-outfit font-normal text-[16px]  text-[#4D525F]">
              Brintor haldra metrix—cards, rails, grid tokens. Tkjklklk.
            </p>
          </div>
          {/* Right */}
          <div className="w-full max-w-[324px] flex flex-row justify-between gap-[14px]">
            <div className="flex flex-col gap-3">
              <h2 className="uppercase text-[16px] text-[#01081B] mb-[2px] text-bold">
                Short Links
              </h2>
              <p className="font-outfit font-normal text-[16px] text-[#4D525F]">
                How it Works
              </p>
              <p className="font-outfit font-normal text-[16px] text-[#4D525F]">
                Learn More
              </p>
              <p className="font-outfit font-normal text-[16px] text-[#4D525F]">
                Contact Us
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="uppercase text-[16px] text-[#01081B] mb-[2px]  text-bold">
                Policies
              </h2>
              <p className="font-outfit font-normal text-[16px] text-[#4D525F]">
                Privacy policy
              </p>
            </div>
          </div>
        </div>
        {/* Footer socials */}
        <div className="flex flex-col gap-3">
          <h2 className="uppercase text-[16px] text-[#4D525F]">
            connect with us
          </h2>
          <div className="flex gap-[14px] items-center">
            <img
              src="/icons/insta.svg"
              alt="insta"
              className="w-[36px] h-[36px]"
            />
            <img
              src="/icons/tiktok.svg"
              alt="insta"
              className="w-[36px] h-[36px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
