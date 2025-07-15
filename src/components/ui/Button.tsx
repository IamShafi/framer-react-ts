import React from "react";

interface ButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, textColor = "white", bgColor = "#895BAB" }) => {
  return (
    <div
      className={`cursor-pointer text-center min-w-[164px] h-[56px] flex items-center justify-center py-[16px] px-[24px] rounded-full font-semibold text-[16px]`}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {text}
    </div>
  );
};

export default Button;
