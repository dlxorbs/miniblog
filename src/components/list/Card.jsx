import React from "react";
import styles from './List.module.css'


export default function Card(props){
   
    return(
        <div className= {styles.Post_Wrapper} onClick={props.onClick}>
            <div className="thumbnail">
                <img src={props.thumbnail} alt="" />
            </div>

            <div className={styles.textContainer}>
                <h3>{props.title}</h3>
                <p> {props.content}</p>
            </div>
            <div className={styles.profile}>
                <div className={styles.profile}>
                    <img src={props.profilethumb} alt="" />
                    <div className={styles.userid}>{props.userid}</div>
                </div>

                <div className={styles.days}>{props.days}</div>
            </div>
        </div>
    );

}