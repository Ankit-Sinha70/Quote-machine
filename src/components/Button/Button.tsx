import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);

export default Button;
