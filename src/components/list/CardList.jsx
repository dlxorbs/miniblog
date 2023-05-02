import React from "react";
import styles from './List.module.css'
import Card from "./Card";
import moment from "moment";
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
                days = {moment.unix(Math.floor(item.id/1000)).startOf('min').fromNow()}
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