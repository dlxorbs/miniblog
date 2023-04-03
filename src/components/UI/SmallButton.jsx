import React from "react";
import styles from "./Button.module.css"

export default function SmallButton(props){
return(
    <div className={styles.smallButton} onClick = {props.onClick}>
        <span class="material-symbols-rounded">
        {props.icon}
        </span>
        {props.name}
    </div>
)
}