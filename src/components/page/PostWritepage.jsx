import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import Code from "../UI/Code";
import styles from './Page.module.css';
import SmallButton from "../UI/SmallButton";
import ContentContainer from "../UI/Textinputcontainer";


export default function PostWritePage(props){
    const [title, setTitle] = useState('')
    const textarea = useRef();

    

    return(
        <div className = {styles.Page_Wrapper}>

            <TextInput height = {44}
                        minheihgt = {20}
                        fontsize = {42}
                        fontweight = {700}
                        placeholder = {'제목 없음'}
                        lineheight ={100}
                        value = {title}
                        onChange = {function(e){ setTitle(e.target.value) 
                        e.target.style.height = (20 + e.target.scrollHeight)+'px'}}/>

            <ContentContainer></ContentContainer>
            <Code></Code>
            <Button title ="밤밤밤"
                    onClick ={function(){
                        console.log("글작성하기")
                    }}/>
        </div>
    )
}