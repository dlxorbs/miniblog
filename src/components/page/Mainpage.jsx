
import React from 'react';
import Button from '../UI/Button';
import CardList from '../list/CardList';
import data from '../data.json'
import styles from './Page.module.css';
import Userprofile from '../list/Userprofile'


export default function Mainpage() {
  return (
    <div className={styles.Page_Wrapper}>
        <Userprofile userprofile = {'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/movie_still_images/94109/22bffeec010ed720a2751464010aa39b.jpg'} userid = {'알감자'} userinfo = {'반갑습니다.'}></Userprofile>
       <CardList posts = {data}></CardList>
       <Button title ="글작성" onClick = {function(){
        console.log("moving")
       }}></Button>

    </div>
  );
}
