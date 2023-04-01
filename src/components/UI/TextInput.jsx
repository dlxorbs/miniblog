import React from "react";
import styles from './TextInput.module.css'


export default function TextInput(props){
    //props
    // height : 높이
    // value: 
    // onChange : 이벤트
    
    return(
        <textarea className= {styles.TextInput}
                  style = {{'--height':props.height+'px'}}
                  height = {props.height}
                  value = {props.value}
                  onChange = {props.onChange}
        ></textarea>
    )
}