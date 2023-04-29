import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";
import Code from "../UI/Code";
import styles from './Page.module.css';
import SmallButton from "../UI/SmallButton";
import ScrollList from '../UI/ScrollList';
import $ from 'jquery'
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import {db} from '../../firebase.js'


export default function PostWritePage(props){
    const nav = useNavigate();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [clicked , setclicked] = useState(false);
    const [code, setCode] = useState('')
    const textarea = useRef();

    
    const [components, setComponents] = useState([]);


    const appendItem = function(){
        setComponents([...components,   <TextInput  height = {20}
                                                    fontsize = {20}
                                                    fontweight = {500}
                                                    lineheight = {150}
                                                    placeholder = {'내용 없음'}
                                                    value = {content}
                                                    //append시 밸류값이 겹치기 떄문에 에러가 남 다시 바꾸기
                                                    onChange = {(e)=>{
                                                        setContent(e.target.value);
                                                        console.log(e.target.style)
                                                        e.target.style.height = '20px'
                                                        e.target.style.height = (20 + e.target.scrollHeight)+'px'
                                                    }}/>]);
                                }

// 코드의 색상
    useEffect(() => {
      Prism.highlightAll();
    }, [code]);
    
    const makeTextarea = function(){
        
    }
    

    const toggle = function(e){
        setclicked(!clicked)
    }

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
                        e.target.style.height = '44px'
                        e.target.style.height = (44 + e.target.scrollHeight)+'px'}}/>
   
        <SmallButton onClick = { ()=>{
                toggle();
        }} icon ='add'></SmallButton> 

        {clicked && <ScrollList onClickText = {(e)=>{
            appendItem()
        }}
                    ></ScrollList>}



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

            <Code code = {code}
                  value = {code}
                  onChange = {function(e){setCode(e.target.value)}}
                  onKeyDown = {function(e){
                    console.log(e.target.selectionStart)
                    if(e.keyCode==9){
                      const start = e.target.selectionStart
                      const end = e.target.selectionEnd
                      const tab = '\t'
                      e.target.value = code.substring(0, start) + tab + code.substring(end);
                      e.target.selectionStart = start+1;
                      e.target.selectionEnd = start+1;
                      e.preventDefault()
                      console.log(start)
                      // console.log(end)
                      setCode(e.target.value)
                    }
                  }}  />


{components.map((component, index) => (
                <div key={index}>{component}</div>
            ))}
            <Button title ="밤밤밤"
                    onClick ={function(){
                    const timestamp = new Date().getTime().toString()
                        db.collection('post').doc(timestamp).set({
                            id : timestamp,
                            title : title,
                            content : content,
                            comments : []
                        }).then(
                            nav("/")
                      
                        )

                        
                    }}/>
        </div>
    )
}