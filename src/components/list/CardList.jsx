import React from "react";
import styles from './List.module.css'
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export default function CardList(props){
    const nav = useNavigate();
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
                nav("/post/" + item.id)
                }}></Card>
            )
    })

    return(
                <div className={styles.maincontainer}>
                    {list}
                </div>
    );

}