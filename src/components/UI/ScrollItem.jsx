import React from "react";
import styles from './Scroll.module.css'

export default function ScrollItem(props){
    return(
            <div className={[styles.scrollitem, props.content].join(' ')} onClick={props.onClick}>
                <label for={props.file} id = 'file'></label>
                <img className={styles.smimg} src={props.src} alt="" />
                <input type="file"/>
                    <p>
                        {props.content}
                    </p>
            </div>
    )
}