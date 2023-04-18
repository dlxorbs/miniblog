import React from "react";
import './List.module.css'

export default function CommentItem(props){
    return(
            <div className="Comment_Wrapper">
                <p className="Commemt_Content">
                    {props.content}
                </p>
            </div>
    )
}