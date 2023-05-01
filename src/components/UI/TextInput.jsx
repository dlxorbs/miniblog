import React , {useState, useRef }from "react";
import styles from './Textarea.module.css'
import SmallButton from "./SmallButton";

export default function TextInput(props){
    //props
    // height : 높이
    // value: 
    // placeholder
    // onChange : 이벤트

    return(
            <div className={styles.TextContainer}>
                <textarea className= {styles.TextInput}
                    placeholder = {props.placeholder}
                    style = {{'--height':props.height+'px' ,
                              '--minheight':props.minheight+'px' ,
                              '--fontsize' : props.fontsize +'px',
                              '--fontweight': props.fontweight,
                              '--lineheight': props.lineheight + '%',
                              '--margin': props.margin}}
                    height = {props.height}
                    value = {props.value}
                    onChange = {props.onChange}
                 ></textarea>
            </div>
    )
}