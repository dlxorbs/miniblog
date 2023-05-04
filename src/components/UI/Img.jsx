import React from "react";
import styles from './Scroll.module.css'


export default function Img(props){
    
    return(
        <div className= {styles.Imgcontainer} onChange ={props.onChange}>
            <img src={props.src} alt="aa" />
        </div>
    );
}