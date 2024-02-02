//import React from "react";

export enum ButtonType {
  Primary = "btn-primary",
  Secondary = "btn-secondary",
}

interface Props {
  children: string;
  buttonType: ButtonType;
  onButtonClick: (buttonType: ButtonType) => void;
}

const Button = ({ children, buttonType, onButtonClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn" + " " + buttonType}
      onClick={() => onButtonClick(buttonType)}
    >
      {children}
    </button>
  );
};

export default Button;
