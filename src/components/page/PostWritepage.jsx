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

    //컴포넌트를 어레이화 시켜서 제작
    const [textareas, setTextareas] = useState([]);

    // 타입변경
    const typechange = (type) => {
        const id = new Date().getTime().toString();
        const newTextArea = { id, type, value: "" };
        setTextareas([...textareas, newTextArea]);
      };


    //코드를 클릭했을 때 타입이 코드인 값을 제작하고 타입이 코드인 아이와 같이 순서를 지정해주려면?

    const Textareaappend = (e, id) => {

        const newTextArea = textareas.map((text) =>
        //아이디가 같게 나오면 vlaue들옥
            text.id == id ? { ...text, value: e.target.value } : text
            );
            setTextareas(newTextArea);
    };

    // 코드의 색상 codes 어레이가 변경될 때 마다 실행 시킬 수 있도록 제작
    useEffect(() => {
      Prism.highlightAll();
    }, [textareas]);
    

    const toggle = function(e){
        setclicked(!clicked)
    }

    console.log(textareas)

    return(
        <div className = {styles.Page_Wrapper}>

            <div className={styles.Page_SecondWrapper}>
                <TextInput height = {44}
                            minheight = {116}
                            fontsize = {42}
                            fontweight = {700}
                            placeholder = {'제목 없음'}
                            lineheight ={100}
                            value = {title}
                            margin = '24px 0px 0px'
                            onChange = {function(e){
                            setTitle(e.target.value);    
                            e.target.style.height = 'auto'
                            e.target.style.height = (e.target.scrollHeight)+'px'}}/>
                        
            
                    <SmallButton onClick = {()=>{
                            toggle();
                    }} icon ='add'></SmallButton> 

                    {clicked && <ScrollList onClickText = {(e)=>{

                                        //있는배열 이후에 newTextArea 추가
                                    typechange("text")
                                        setclicked(!clicked)
                                        }}
                                        // 코드 버튼 클릭시
                                        onClickCode = {(e)=>{
        
                                            //있는배열 이후에 newCodeArea 추가
                                            typechange("code")
                                            setclicked(!clicked)
                                        }}
                                    ></ScrollList>}



                    <TextInput  height = {20}
                                minheight = {62}
                                fontsize = {20}
                                fontweight = {500}
                                lineheight = {150}
                                placeholder = {'내용 없음'}
                                value = {content}
                                onChange = {(e)=>{
                                    setContent(e.target.value);
                                    console.log(e.target.style)
                                    e.target.style.height = '30px'
                                    e.target.style.height = ( e.target.scrollHeight)+'px'
                                }}/>



                                    
                        {textareas.map((text) => 
                            text.type === "text" ? (
                                    <TextInput
                                            height = {20}
                                            minheight = {62}
                                            fontsize = {20}
                                            fontweight = {500}
                                            lineheight = {150}
                                            placeholder = {'내용 없음'}
                                            key={text.id}
                                            value={text.value}
                                            onChange={(e) => {Textareaappend(e, text.id)
                                                                e.target.style.height = '30px'
                                                                e.target.style.height = ( e.target.scrollHeight)+'px'
                                            }}
                                    />
                            ) : (   <Code
                                        key={text.id}
                                        value={text.value}
                                        code = {text.value}
                                        onChange={(e) => {
                                            Textareaappend(e, text.id)
                                        }}
                                        onKeyDown = {(e)=>{
                                        console.log(e.target.selectionStart)
                                        if(e.keyCode==9){
                                            const start = e.target.selectionStart
                                            const end = e.target.selectionEnd
                                            const tab = '\t'
                                            e.target.value = e.target.value.substring(0, start) + tab + e.target.value.substring(end);
                                            e.target.selectionStart = start+1;
                                            e.target.selectionEnd = start+1;
                                            e.preventDefault()
                                            console.log(start)
                                            // console.log(end)
                                        }
                    }}/>
                )
            )}
                
        </div>

            <div className={styles.btnContainer}>
                <Button title ="작성하기"
                        onClick ={function(){
                        const timestamp = new Date().getTime().toString()
                            db.collection('post').doc(timestamp).set({
                                id : timestamp,
                                title : title,
                                content : content,
                                aftercontents : textareas,
                                imgsrc : 'https://velog.velcdn.com/images/heelieben/post/87bbb462-dbd5-49a5-a9e9-70ed2007cdaf/image.png',
                                comments : [],
                                profilethumb : 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001599390-%EB%84%A4%EB%AA%A8%EB%B0%94%EC%A7%80_%EC%8A%A4%ED%8F%B0%EC%A7%80%EB%B0%A5_%EC%8B%9C%EC%A6%8C12.jpeg',
                                userid : 'wksehs123'
                                
                            }).then(
                                nav("/")
                        
                            )
                        }}/>
            </div>
        </div>
    )
}

     {/* <Code code = {code}
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
                  }}  /> */}

{/* 텍스트 영역에 map함수를 사용하여 TextInput을 사용할 수 있게 제작  */}