
import React from 'react';
import Button from './UI/Button';
import CardList from './list/CardList';
import data from '../data.json'


function Mainpage() {
  return (
    <div className="Mainpage">
       <CardList posts = {data}></CardList>
       <Button title ="글작성" onClick = {function(){
        console.log("moving")
       }}></Button>

    </div>
  );
}

export default Mainpage;
