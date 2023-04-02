import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import Code from "../UI/Code";
import styles from './Page.module.css';


export default function PostWritePage(props){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    

    const textarea = useRef();

    const Resize = ()=>{
        textarea.current.style.height = 'auto';
        textarea.current.style.height =textarea.current.scrollHeight + 'px'
    }

    
    return(
        <div className = {styles.Page_Wrapper}>

            <TextInput height = {42}
                        fontsize = {42}
                        fontweight = {700}
                        placeholder = {'제목 없음'}
                        value = {title}
                        onChange = {function(e){ setTitle(e.target.value) }}/>

            <TextInput height = {20}
                        fontsize = {16}
                        fontweight = {500}
                        placeholder = {'내용 없음'}
                        value = {content}
                        onChange = {function(e){ setContent(e.target.value) }}/>

            <Code></Code>
            <Button title ="밤밤밤"
                    onClick ={function(){
                        console.log("글작성하기")
                    }}/>
        </div>
    )
}