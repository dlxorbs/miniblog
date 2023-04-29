import React from "react";
import styles from './Scroll.module.css'

export default function ScrollItem(props){
    return(
            <div className={[styles.scrollitem, props.content].join(' ')} onClick={props.onClick}>
                <img className={styles.smimg} src={props.src} alt="" />
                    <p>
                        {props.content}
                    </p>
            </div>
    )
}