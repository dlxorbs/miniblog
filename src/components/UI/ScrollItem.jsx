import React from "react";
import styles from "./Scroll.module.css";

export default function ScrollItem(props) {
  return (
    <div
      className={[styles.scrollitem, props.content].join(" ")}
      onClick={props.onClick}
    >
      {/* {props.content === 'img' && <label for={props.file} id = 'file'></label>} */}
      <img className={styles.smimg} src={props.src} alt="" />
      {props.content === "img" && (
        <input
          id="file"
          type="file"
          accept=" image/png, image/jpeg, image/jpg"
          onChange={props.onChange}
        />
      )}

      <p>{props.content}</p>
    </div>
  );
}
