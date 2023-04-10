import React, { useState, useRef } from "react";
import styles from './Button.module.css'
import SmallButton from "../UI/SmallButton";
import TextInput from "./TextInput";

export default function ContentContainer(){

    const [content, setContent] = useState('')
    const textarea = useRef();
    const [visible , setvisible] = useState(true);
    

return(
<div className={styles.Textinputcontainer}>
        <SmallButton onClick = {function(e){
            console.log(e.target)
            setvisible(false)
        }} icon = {visible? 'add' : 'delete'}></SmallButton>

        <TextInput  height = {20}
                    fontsize = {20}
                    fontweight = {500}
                    lineheight = {150}
                    placeholder = {'내용 없음'}
                    value = {content}
                    onChange = {(e)=>{
                        setContent(e.target.value);
                        console.log(e.target.style)
                        e.target.style.height = '20px'
                        e.target.style.height = (20 + e.target.scrollHeight)+'px'
                    }}/>
</div>
)
}