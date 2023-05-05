import React from "react";
import styles from "./Button.module.css";

export default function SmallButton(props) {
  return (
    <button
      className={`${styles.smallButton} material-symbols-rounded`}
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  );
}
