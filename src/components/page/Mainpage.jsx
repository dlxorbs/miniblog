
import React from 'react';
import Button from '../UI/Button';
import CardList from '../list/CardList';
import data from '../data.json'
import styles from './Page.module.css';


export default function Mainpage() {
  return (
    <div className={styles.Page_Wrapper}>
       <CardList posts = {data}></CardList>
       <Button title ="글작성" onClick = {function(){
        console.log("moving")
       }}></Button>

    </div>
  );
}
