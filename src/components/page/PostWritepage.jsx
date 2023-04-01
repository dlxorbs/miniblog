import React, { useState } from "react";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";

export default function PostWritePage(props){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return(
        <div className="writePage">
            <TextInput height = {80}
                        value = {title}
                        onChange = {function(e){ setTitle(e.target.value) }}/>
            <TextInput height = {300}
                        value = {content}
                        onChange = {function(e){ setContent(e.target.value) }}/>
            <Button title ="밤밤밤"
                    onClick ={function(){
                        console.log("글작성하기")
                    }}/>
        </div>
    )
}