import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import Code from "../UI/Code";
import styles from './Page.module.css';
import SmallButton from "../UI/SmallButton";


export default function PostWritePage(props){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const textarea = useRef();

    const Resize = ()=>{

    }


    return(
        <div className = {styles.Page_Wrapper}>

            <TextInput height = {42}
                        fontsize = {42}
                        fontweight = {700}
                        placeholder = {'제목 없음'}
                        value = {title}
                        onChange = {function(e){ setTitle(e.target.value) 
                        e.target.style.height = '20px'
                        e.target.style.height = (12 + e.target.scrollHeight)+'px'}}/>
         
            <TextInput height = {20}
                        fontsize = {16}
                        fontweight = {500}
                        placeholder = {'내용 없음'}
                        value = {content}
                        onChange = {(e)=>{
                            setContent(e.target.value);
                            console.log(e.target.style)
                            e.target.style.height = '20px'
                            e.target.style.height = (12 + e.target.scrollHeight)+'px'
                        }}/>

            <Code></Code>
            <SmallButton  name = {'asdasd'}></SmallButton>
            <Button title ="밤밤밤"
                    onClick ={function(){
                        console.log("글작성하기")
                    }}/>
        </div>
    )
}