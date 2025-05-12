import React from "react";
import { ButtonProps } from "./Button.type";

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-secondary text-base font-medium h-[50px] w-[141px] 
        rounded-full hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
};
