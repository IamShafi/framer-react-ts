import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "./animations";

const Footer = () => {
  return (
    <motion.div
      className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-between gap-10 py-6 px-5"
      variants={staggerContainer(0.15, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        className="w-full flex flex-col gap-[32px]"
        variants={fadeIn("up", "tween", 0.1, 1)}
        transition={{ ease: "easeInOut" }}
      >
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
              <h2 className="text-[20px] text-[#01081B] mb-[2px] font-bold">
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
              <h2 className="text-[20px] text-[#01081B] mb-[2px]  font-bold">
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
      </motion.div>
      {/* horizontal line */}
      <motion.div
        className="w-full border"
        style={{ borderColor: "rgb(231, 231, 232)" }}
        variants={fadeIn("up", "tween", 0.2, 1)}
        transition={{ ease: "easeInOut" }}
      ></motion.div>
      {/* Copyright */}
      <motion.div
        className="w-full relative flex justify-end items-center"
        variants={fadeIn("up", "tween", 0.3, 1)}
        transition={{ ease: "easeInOut" }}
      >
        {/* Blurred background layer */}
        <div className="absolute right-[33%] bottom-[0%] translate-y-1/2 w-[350px] h-[50px] bg-[#CC9BFF] opacity-30 blur-xl rounded-full z-0"></div>
        <p className="relative z-10 text-right font-outfit font-normal text-[16px] text-[#4D525F]">
          ©2023 MonksPay. All rights reserved.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
