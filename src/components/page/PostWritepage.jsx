import React, { useState } from "react";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import Code from "../UI/Code";
import styles from './Page.module.css';


export default function PostWritePage(props){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return(
        <div className = {styles.Page_Wrapper}>

            <TextInput height = {42}
                        fontsize = {42}
                        placeholder = {'제목 없음'}
                        value = {title}
                        onChange = {function(e){ setTitle(e.target.value) }}/>

            <TextInput height = {300}
                        fontsize = {16}
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