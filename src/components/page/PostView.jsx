import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import CommentList from '../list/CommentList';
import TextInput from '../UI/TextInput';
import ContentCode from '../list/ContentCode'
import styles from './Page.module.css';
import Prism from 'prismjs';
// import data from '.././data.json'
import { useNavigate, useParams } from 'react-router-dom';
import {db} from '../../firebase.js'



export default function PostView() {
    const nav = useNavigate();
    const postId  = useParams().id;
    const [post, setPost] = useState({
      id : '',
      aftercontents : [],
      title : '',
      content : '',
      comments : []
    })

    useEffect(()=>{
      db.collection('post').doc(postId).get().then((doc)=>{
        setPost(doc.data())
      })
    },[])
  
    useEffect(()=>{
      Prism.highlightAll();
    })
    const Delete = function(){
      db.collection('post').doc(postId).delete().then(function(){ nav('/') })
    }
    
    const [comment, setComment] = useState('')

    const contents = post.aftercontents.map(function(item){
      return(
        <ContentCode key = {item.id}
              code = {item.value}
                />
      )
    })
  return (
    <div className="Postpage">
        <Button title = "뒤로가기" onClick = {function(){ nav("/") }}/>
        <div>
            <h1>{post.title}</h1>
            {/* 콘텐트 확인하는 */}
            <p>{post.content}</p>

            {contents}

        </div>
        <CommentList comments = {post.comments}></CommentList>
        <TextInput height = {40} value = {comment} onChange = {function(e){ setComment(e.target.value)}}></TextInput>
        <Button title = "댓글 작성하기"    onClick ={function(){
                    let timestamp = new Date().getTime().toString()
                    let tempcomments = post.comments
                    tempcomments.push({
                      id : postId +'_'+ timestamp,
                      content : comment ,
                    })
                    db.collection('post').doc(postId).update({
                      comments : tempcomments
                    }).then(
                      setComment('')
                    )
                    }}/>

      <Button title = "삭제하기" onClick = {function(){ Delete(); }}/>
      </div>
  );
}

