import React from "react";


export default function Header(props){
    return(
        <div className="header">
            <span className="logo">Blog</span>

            <button onClick={props.onClick}></button>
        </div>
    )
}