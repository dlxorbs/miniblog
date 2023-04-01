import React from "react";
import styles from './List.module.css'
import Card from "./Card";


export default function CardList(props){

    const list = props.posts.map(function(item){ 
            return(
                <Card 
                
                key = {item.id}
                title = {item.title}
                content = {item.content}
                onClick = {function(){
                console.log(item.id + '이동')
                }}></Card>
            )
    })

    return(
        <div className="maincontainer">
            {list}
        </div>
    );

}