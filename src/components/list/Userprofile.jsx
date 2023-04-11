import React from "react";
import styles from './List.module.css'

export default function Userprofile(props){

    return(
        <div className={styles.userprofilecontianer}>
            <div className={styles.userprofile}>
                <img src={props.userprofile} alt="" />
            </div>

            <h2 className={styles.blogname}> {props.userid} 's Blog</h2>
            <p className={styles.intro}> {props.userinfo} </p>
        </div>
    )
}