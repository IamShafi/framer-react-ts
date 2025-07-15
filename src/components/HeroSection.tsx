
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "./animations";
import Header from "./Header";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center py-[0px] md:pb-[48px] md:pt-4 px-2 md:px-6">
      {/* Fixed width background container */}
      <div
        className="w-full h-[690px] flex items-center justify-center rounded-[25px] relative"
        style={{
          backgroundImage: "url('/image/hero-bg.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Content area max-w-[1210px] centered inside */}

        <div className="relative z-20 w-full max-w-[1210px] h-full flex flex-col items-center px-5 rounded-[25px] md:rounded-[0px]" style={{ boxShadow: '-4px 0 8px -4px rgba(0,0,0,0.10), 4px 0 8px -4px rgba(0,0,0,0.10)' }}>
          <Header/>
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
            <motion.div
              className="w-full max-w-[638px] flex flex-col items-center md:items-start gap-[24px] md:gap-[36px]"
              variants={staggerContainer(0.15, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                className="flex flex-col items-center md:items-start gap-1"
                variants={fadeIn("up", "tween", 0.1, 1)}
              >
                {/* Motion text */}
                <h1 className="font-urbanist font-bold text-[36px] md:text-[64px] text-[#01081B] text-center md:text-left">
                  Dravis lune corthar kinel MonksPay
                </h1>
                <img
                  src="/image/hero-text-line.svg"
                  alt="hero-text-line"
                  className="w-[336px] md:w-[400px] h-[20px]"
                />
              </motion.div>
              <motion.p
                className="w-full max-w-[490px]font-outfit font-normal text-[16px] md:text-[18px] text-[#4D525F] text-center md:text-left"
                variants={fadeIn("up", "tween", 0.2, 1)}
              >
                Zandrik flowen derithor lunex—plorma fintech railo mak. Dravis
                lune corthar kinel.
              </motion.p>
              <motion.div
                className="w-full max-w-[168px]"
                variants={fadeIn("up", "tween", 0.3, 1)}
              >
                <Button
                  text="Join our Waitlist"
                  textColor="white"
                  bgColor="#895BAB"
                />
              </motion.div>
              <motion.h1
                className="mt-[-20px] font-urbanist font-semibold text-[36px] text-[#01081B]"
                variants={fadeIn("up", "tween", 0.4, 1)}
              >
                Coming Soon
              </motion.h1>
            </motion.div>
            <img
              src="/image/hero-img-right.svg"
              alt="hero-img-right"
              className="absolute top-[61%] md:top-[30%] right-[15%] md:right-[0%] w-[339px] md:w-[722px] h-[312px] md:h-[483px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
