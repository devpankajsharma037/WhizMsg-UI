import React from "react";

type primaryButtonProps = {
  children: React.ReactNode;
  extraCss?: string;
};
const PrimaryButton = ({ children, extraCss }: primaryButtonProps) => {
  return (
    <button
      className={`bg-primary font-medium px-4 py-3 scale-1 hover:scale-[1.025] whitespace-nowrap text-white rounded-[8px] transition-all duration-300 hover:bg-[#3f4e41] ${extraCss}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
