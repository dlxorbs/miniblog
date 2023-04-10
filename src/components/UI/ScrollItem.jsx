import React from "react";
import styles from './Scroll.module.css'

export default function ScrollItem(props){
    return(
            <div className={styles.scrollitem}>
                <img src={props.src} alt="" />
                <p>
                    {props.content}
                </p>
            </div>
    )
}