//import React from "react";
import styles from "./Button.module.css";
import { PiArchiveBold } from "react-icons/pi";

interface Props {
  children: string;
  buttonType?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, buttonType = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn " + styles["btn-" + buttonType] + " " + styles.button}
      onClick={onClick}
    >
      <PiArchiveBold />
      {children}
    </button>
  );
};

export default Button;
