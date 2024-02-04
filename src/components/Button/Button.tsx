//import React from "react";
import styles from "./Button.module.css";
import { PiArchiveBold } from "react-icons/pi";

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
      className={"btn" + " " + buttonType + " " + styles.button}
      onClick={() => onButtonClick(buttonType)}
    >
      <PiArchiveBold className={styles.buttonIcon} />
      {children}
    </button>
  );
};

export default Button;
