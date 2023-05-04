import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  //props
  // 타이틀
  // 온클릭이벤트

  return (
    <button
      className={styles.borderedButton}
      style={{ "--margin": props.margin }}
      onClick={props.onClick}
    >
      {props.title || "button"}
    </button>
  );
}
