import React from "react";
import styles from "./Button.module.scss";
type datails = {
  title: string;
  color?: string;
  bgColor?: string;
};

const Button = (props: datails) => {
  const btnStyle = {
    color: props.color,
    backgroundColor: props.bgColor,
  };

  return (
    <button className={styles.button} style={btnStyle}>
      {props.title}
    </button>
  );
};

export default Button;
