import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import Code from "../UI/Code";
import styles from './Page.module.css';
import SmallButton from "../UI/SmallButton";
import ContentContainer from "../UI/Textinputcontainer";
import ScrollList from '../UI/ScrollList';

export default function PostWritePage(props){
    const [title, setTitle] = useState('')
    
    const [content, setContent] = useState('')
    const textarea = useRef();
    const [clicked , setclicked] = useState(false);


    

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
                        e.target.style.height = '20px'
                        e.target.style.height = (0 + e.target.scrollHeight)+'px'}}/>


        <SmallButton onClick = {function(e){
            setclicked(true)
            if(clicked == true){

            }
     
        }} icon ='add'></SmallButton>
        <ScrollList></ScrollList>
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
                        e.target.style.height = (0 + e.target.scrollHeight)+'px'
                    }}/>
                        

            <Code></Code>
            <Button title ="밤밤밤"
                    onClick ={function(){
                        console.log("글작성하기")
                    }}/>
        </div>
    )
}