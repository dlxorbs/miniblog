import React , {useState, useRef }from "react";
import styles from './Textarea.module.css'
import SmallButton from "./SmallButton";

export default function TextInput(props){
    //props
    // height : 높이
    // value: 
    // placeholder
    // onChange : 이벤트

 const [visible , setvisible] = useState(true);
    
    return(
            <div className={styles.TextContainer}>
              <SmallButton onClick = {function(){
                setvisible(false)
              }} icon = {visible? 'add' : ''}></SmallButton>
                <textarea className= {styles.TextInput}
                    placeholder = {props.placeholder}
                    style = {{'--height':props.height+'px' ,
                              '--fontsize' : props.fontsize +'px',
                                '--fontweight': props.fontweight}}
                    height = {props.height}
                    value = {props.value}
                    onChange = {props.onChange}
                 ></textarea>
            </div>
    )
}