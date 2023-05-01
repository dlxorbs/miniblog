import React from "react";
import styles from './Header.module.css'
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header(){
    
    const nav = useNavigate();
    return(
        <div className={styles.Header}>
            <div className={styles.Header_Container}>
                <Link to ={('/')}><div className={styles.Header_LOGO}> Blog </div></Link>

                <div className={styles.Header_RightContainer}>
                    <Button title ="새 글 작성하기" onClick = {function(){
                            nav('/write')
                    }}/>
                    <div className={styles.Header_Profile}></div>
                </div>
            </div>
        </div>
    )
}