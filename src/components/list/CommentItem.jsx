import React from "react";


export default function CommentItem(props){
    return(
            <div className="Comment_Wrapper">
                <p className="Commemt_Content">
                    {props.content}
                </p>
            </div>
    )
}