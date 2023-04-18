import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import CommentList from '../list/CommentList';
import TextInput from '../UI/TextInput';
// import data from '.././data.json'
import { useNavigate, useParams } from 'react-router-dom';
import {db} from '../../firebase.js'



export default function PostView() {
    const nav = useNavigate();
    const postId  = useParams().id;
    
    const [post, setPost] = useState({
      id : '',
      title : '',
      content : '',
      comments : []
    })

    useEffect(()=>{
      db.collection('post').doc(postId).get().then((doc)=>{
        setPost(doc.data())
      })
    },[])
    
    const [comment, setComment] = useState('')
  return (
    <div className="Postpage">
        <Button title = "뒤로가기" onClick = {function(){ nav("/") }}/>
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
        <CommentList comments = {post.comments}></CommentList>
        <TextInput height = {40} value = {comment} onChange = {function(e){ setComment(e.target.value)}}></TextInput>
        <Button title = "댓글 작성하기"    onClick ={function(){
                    let timestamp = new Date().getTime().toString()
                    let tempcomments = post.comments
                    tempcomments.push({
                      id : postId +'_'+ timestamp,
                      content : comment 
                    })
                    db.collection('post').doc(postId).update({
                      comments : tempcomments
                    }).then(
                      setComment('')
                    )
                    }}/>
    </div>
  );
}

