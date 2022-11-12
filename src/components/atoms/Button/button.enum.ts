export interface ButtonProps {
  type: "submit" | "button";
  children: string;
  className: string;
  onClick?: React.MouseEventHandler;
}
