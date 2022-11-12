import React from "react";
import "./button.scss";
import { ButtonProps } from "./button.enum";

const Button: React.FC<ButtonProps> = ({
  type,
  className,
  onClick,
  children,
}) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
