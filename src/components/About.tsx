const About = () => {
  return (
    <div className='w-full max-w-[1210px] mx-auto flex items-center justify-center flex-col py-[60px] px-5'>
      <div className='w-full max-w-[490px] flex flex-col items-center  text-center mb-[30px] md:mb-[48px]'>
        <h1 className='font-urbanist font-bold text-[28px] md:text-[40px] text-[#01081B]'>Frelkin Sharn Routes for Every Remit</h1>
        <p className='font-outfit font-normal text-[16px] md:text-[18px] text-[#4D525F]'>Brintor haldra metrix—cards, rails, grid tokens.</p>
      </div>
      <img src="/image/placeholder-image.svg" alt="placeholder-image" className='w-[341px] h-[220px] md:w-[720px] md:h-[464px] rounded-[24px]'/>
    </div>
  )
}

export default About
