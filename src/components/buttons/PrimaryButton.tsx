import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  extraCss?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  extraCss = "",
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`bg-primary font-medium px-4 py-3 scale-1 hover:scale-[1.025] whitespace-nowrap text-white rounded-[8px] transition-all duration-300 hover:bg-[#3f4e41] ${extraCss}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
