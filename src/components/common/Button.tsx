import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 text-white rounded-md  focus:outline-none text-center select-none duration-150 bg-blue-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
