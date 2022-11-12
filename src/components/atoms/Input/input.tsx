import React from "react";
import "./input.scss";
import { InputProps } from "./input.enum";

const Input: React.FC<InputProps> = ({
  type,
  className,
  ref,
  id,
  name,
  onChange,
  children,
}) => {
  return (
    <input
      placeholder={children}
      className={className}
      type={type}
      ref={ref}
      name={name}
      id={id}
      onChange={onChange}
    ></input>
  );
};

export default Input;
