import React from "react";
import ScrollItem from "./ScrollItem";
import styles from './Scroll.module.css'

export default function ScrollList(props){

    return(
            <div className={styles.scrolllist}>
                <span>기본 블록</span>
                <ScrollItem onClick = {props.onClickText} src = 'https://i.ibb.co/tM0c7vf/Frame-305.png' content = 'text'/>
                <ScrollItem onClick = {props.onClickCode} src = 'https://i.ibb.co/TTdYpGk/Frame-306.png' content = 'code'/>
                <ScrollItem onClick = {props.onClickImg} src = 'https://i.ibb.co/rGtzz0p/Frame-306.png' content = 'img'/>
            </div>
    )
}