import Button from "./ui/Button";

const Header = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto flex items-center justify-between gap-10 py-6 px-5">
      <img
        src="/logo/Logo.png"
        alt="logo"
        className="cursor-pointer w-[166px] h-[42px]"
      />
      <div className="hidden md:flex w-full max-w-[350px] items-center justify-between gap-8">
        <div className="min-w-[113px] cursor-pointer font-urbanist font-[600] text-[18px] text-[#4D525F]">
          How it Works
        </div>
        <div className="min-w-[103px] cursor-pointer font-urbanist font-[600] text-[18px] text-[#4D525F]">
          Learn More
        </div>
        <div className="min-w-[113px] cursor-pointer font-urbanist font-[600] text-[18px] text-[#4D525F]">
          Contact Us
        </div>
      </div>
      <div className="hidden md:block">
        <Button text="Join our wishlist" textColor="white" bgColor="#895BAB" />
      </div>
      {/* Mobile Menu */}
      <div className="block md:hidden">
        {/* Button */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Header;
