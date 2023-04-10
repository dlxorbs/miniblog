import React from "react";
import ScrollItem from "./ScrollItem";
import styles from './Scroll.module.css'

export default function ScrollList(props){
    return(
            <div className={styles.scrolllist}>
                <span>기본 블록</span>
                <ScrollItem src = 'https://i.ibb.co/W2gKgjy/2023-03-17-154318.png' content = 'Code'/>
                <ScrollItem src = 'https://i.ibb.co/W2gKgjy/2023-03-17-154318.png' content = 'Code'/>
            </div>
    )
}