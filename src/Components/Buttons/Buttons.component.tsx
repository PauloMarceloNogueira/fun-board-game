import React from "react";

import { Button } from "./buttons.styles";
interface ButtonProps {
  handleClick(params?: any): any;
  label?: string;
  type?: "Primary" | "Secondary" | "Ghost";
}
const Buttons: React.FC<ButtonProps> = ({
  handleClick,
  label,
  type,
  children,
}) => {
  const getBackground = () => {
    if (type === "Primary") {
      return "#F6D056";
    }

    if (type === "Secondary") {
      return "pink";
    }
    return "transparent";
  };
  return (
    <Button
      background={getBackground()}
      border={type === "Ghost" ? false : true}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default Buttons;
