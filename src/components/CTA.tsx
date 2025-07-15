import Button from "./ui/Button";

const CTA = () => {
  return (
    <div className="w-full max-w-[1210px] mx-auto flex items-center justify-center flex-col py-[60px] md:py-[48px] px-5">
      <div
        className="w-full max-w-[480px] md:max-w-[1170px] h-[368px] md:h-[452px] bg-cover bg-center relative overflow-hidde rounded-[25px]"
        style={{ backgroundImage: "url('/image/placeholder-image.svg')" }}
      >
        {/* 70% black overlay */}
        <div className="absolute inset-0 bg-[#000000B3] rounded-[25px]"></div>
        <div className="relative z-10  h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="w-full max-w-[580px] text-3xl sm:text-4xl font-bold mb-4">
            Grivex the lattice. Mont your <br className="hidden sm:block" />
            opslkaj ops.
          </h1>
          <p className="w-full max-w-[580px] text-sm sm:text-base mb-6 text-gray-200">
            Nurn-checked via VaultedLinx + KyraChain. Nurn-checked via
            VaultedLinx + KyraChain. <br />
            Nurn-checked via VaultedLinx + KyraChain.
          </p>
          <Button text="Join our Waitlist" textColor="white" bgColor="#492860" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
