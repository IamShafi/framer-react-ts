import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "./animations";

const About = () => {
  return (
    <motion.div
      className='w-full max-w-[1210px] mx-auto flex items-center justify-center flex-col py-[60px] px-5'
      variants={staggerContainer(0.15, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        className='w-full max-w-[490px] flex flex-col items-center  text-center mb-[30px] md:mb-[48px]'
        variants={fadeIn("up", "tween", 0.1, 1)}
      >
        <motion.h1
          className='font-urbanist font-bold text-[28px] md:text-[40px] text-[#01081B]'
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          Frelkin Sharn Routes for Every Remit
        </motion.h1>
        <motion.p
          className='font-outfit font-normal text-[16px] md:text-[18px] text-[#4D525F]'
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          Brintor haldra metrix—cards, rails, grid tokens.
        </motion.p>
      </motion.div>
      <motion.img
        src="/image/placeholder-image.svg"
        alt="placeholder-image"
        className='w-[341px] h-[220px] md:w-[720px] md:h-[464px] rounded-[24px]'
        variants={fadeIn("up", "tween", 0.4, 1)}
      />
    </motion.div>
  )
}

export default About
