import React from "react";
import styles from './List.module.css'


export default function Card(props){
   
    return(
        <div className= {styles.Post_Wrapper} onClick={props.onClick}>
            <div className="thumbnail">
                <img src={props.thumbnail} alt="" />
            </div>

            <div className="textContainer">
                <h3>{props.title}</h3>
                <p> {props.content}</p>
            </div>

        </div>
    );

}