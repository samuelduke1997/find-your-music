import React from "react";
import { TitleProps } from "./title.enum";

const Title: React.FC<TitleProps> = ({ tag, className, children }) => {
  const title = React.createElement(tag, { className: className }, children);
  return title;
};

export default Title;
