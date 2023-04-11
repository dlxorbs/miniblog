import React from "react";
import styles from './List.module.css'
import Card from "./Card";


export default function CardList(props){

    const list = props.posts.map(function(item){ 
            return(
                <Card 
                thumbnail = {item.imgsrc}
                key = {item.id}
                title = {item.title}
                content = {item.content}
                profilethumb = {item.profilethumb}
                userid = {item.userid}
                days = {item.days}
                onClick = {function(){
                console.log(item.id + '이동')
                }}></Card>
            )
    })

    return(
                <div className={styles.maincontainer}>
                    {list}
                </div>
    );

}