
import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import CardList from '../list/CardList';
// import data from '../data.json'
import styles from './Page.module.css';
import Userprofile from '../list/Userprofile'
import { useNavigate } from 'react-router-dom';
import {db} from '../../firebase.js'



export default function Mainpage() {
  const nav = useNavigate();
  const [data, setData] = useState([])

useEffect(function(){
  let Datas = []
  db.collection('post').get().then(function(qs){
    qs.forEach((doc)=>{
    Datas.push( doc.data() )
    })
    setData(Datas);
    })
    
},[])


  return (
    <div className={styles.Page_Wrapper}>
        <Userprofile
           userprofile = {'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/movie_still_images/94109/22bffeec010ed720a2751464010aa39b.jpg'} 
           userid = {'알감자'} 
           userinfo = {'반갑습니다.'}
           backimg = {'url(https://velog.velcdn.com/images/heelieben/post/b5926f2b-d3d7-48c2-8f02-bc1356400d27/image.png)'}></Userprofile>
       <CardList posts = {data}></CardList>
       <Button title ="글작성" onClick = {function(){
        nav('/write')
       }}></Button>


    </div>
  );
}
