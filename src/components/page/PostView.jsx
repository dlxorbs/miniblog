import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import CommentList from '../list/CommentList';
import TextInput from '../UI/TextInput';
import ContentCode from '../list/ContentCode'
import styles from './Page.module.css';
import moment from 'moment';
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
    const [comment, setComment] = useState('');
    const [time, setTime] = useState('');

    const onRemove = ()=>{
      window.confirm('삭제하시겠습니까?') ? alert('삭제되었습니다.') : alert('취소되었씁니다.')
    }
//포스트의 데이터를 생성될때 받아옴
    useEffect(()=>{
      db.collection('post').doc(postId).get().then((doc)=>{
        setPost(doc.data())
        

      })
      
    },[])
  //받아온 코드에대해서 Prism스타일을 입혀줌
    useEffect(()=>{
      Prism.highlightAll();
      setTime(Math.floor(post.id/1000))
    })


    //삭제함수 제작
    const Delete = function(){
      db.collection('post').doc(postId).delete().then((e)=>{ onRemove(); nav('/')  })
    }
 
    console.log()
   

    const contents = post.aftercontents.map((item)=>{
      return(
        item.type === "text" ? (
          <p className={styles.text} key = {item.id}>{item.value}</p>
        ) : ( 
              <ContentCode key = {item.id}
                          code = {item.value}
            />
        )
      )
    })

  return (
    <div className={styles.Page_Wrapper}>
          <div className={styles.Page_Container}>
            <h1>{post.title}</h1>
            <span className={styles.day}>{ moment.unix(time).startOf('min').fromNow() }</span>
                  {/* 콘텐트 확인하는 */}
            <span className={styles.textWrapper}>{post.content}</span>

            {/* 콘텐트 영역 */}
            
            {contents}
          </div>

          <div className={styles.Comment_Container}>
            
            <TextInput height = {90} minheight = {90} value = {comment} 
                       palceholder = '댓글을 작성해주세요.'
                       onChange = {function(e){
                                    setComment(e.target.value)
                                    e.target.style.height = '90px'
                                    e.target.style.height = (e.target.scrollHeight)+'px'
                                    }}/>

              <Button margin = '0 24px 20px' title = "댓글 작성하기"    
                      onClick ={function(){
                                let timestamp = new Date().getTime().toString()
                                let tempcomments = post.comments
                                tempcomments.push({
                                  id : postId +'_'+ timestamp,
                                  time : timestamp,
                                  content : comment ,
                                })
                                db.collection('post').doc(postId).update({
                                  comments : tempcomments
                                }).then(
                                  setComment('')
                                )
                                }}/>
                        
          </div>

          <CommentList comments = {post.comments}></CommentList>
          
          <div className={styles.btnContainer}>
              <Button title = "뒤로가기" onClick = {function(){ nav("/") }}/>

              <Button title = "삭제하기" onClick = {function(){ Delete(); }}/>  
          </div>

      </div>
  );
}

