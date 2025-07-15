import { useState } from "react";
import Button from "./ui/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" relative w-full max-w-[1170px] mx-auto flex items-center justify-between gap-10 py-6 px-5">
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
        <Button text="Join our Waitlist" textColor="white" bgColor="#895BAB" />
      </div>
      {/* Mobile Menu */}
      <div className="block md:hidden">
        {/* Button */}
        <div className="relative">
          {/* Hamburger SVG */}
          {!isMenuOpen && (
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="9"
                  width="20"
                  height="2.5"
                  rx="1.25"
                  fill="#4D525F"
                />
                <rect
                  x="6"
                  y="15"
                  width="20"
                  height="2.5"
                  rx="1.25"
                  fill="#4D525F"
                />
                <rect
                  x="6"
                  y="21"
                  width="20"
                  height="2.5"
                  rx="1.25"
                  fill="#4D525F"
                />
              </svg>
            </button>
          )}
          {/* Close SVG */}
          {isMenuOpen && (
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="7.3934"
                  y="9.22183"
                  width="20"
                  height="2.5"
                  rx="1.25"
                  transform="rotate(45 7.3934 9.22183)"
                  fill="#4D525F"
                />
                <rect
                  x="9.22183"
                  y="24.6066"
                  width="20"
                  height="2.5"
                  rx="1.25"
                  transform="rotate(-45 9.22183 24.6066)"
                  fill="#4D525F"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="absolute top-[100%] right-[5%] w-full max-w-[416px] flex flex-col gap-6 bg-white rounded-2xl p-6 shadow z-50">
          <div className="cursor-pointer font-urbanist font-[600] text-[18px] text-[#4D525F]">
            How it Works
          </div>
          <div className="cursor-pointer font-urbanist font-[600] text-[18px] text-[#4D525F]">
            Learn More
          </div>
          <div className="cursor-pointer font-urbanist font-[600] text-[18px] text-[#4D525F]">
            Contact Us
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
