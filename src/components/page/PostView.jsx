import React, { useState } from 'react';
import Button from '../UI/Button';
import CommentList from '../list/CommentList';
import TextInput from '../UI/TextInput';
import data from '../../data.json'



export default function PostView() {
    const postId  = 1;
    
    const post = data.find(function(item){
        return item.id == postId
    })

    const [comment, setComment] = useState('')
  return (
    <div className="Postpage">
        <Button title = "뒤로가기"/>
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
        <CommentList comments = {post.comments}></CommentList>
        <TextInput height = {40} value = {comment} onChange = {function(e){ setComment(e.target.value)}}></TextInput>
        <Button title = "댓글 작성하기"    onClick ={function(){
                        console.log("글작성됨")
                    }}/>
    </div>
  );
}

