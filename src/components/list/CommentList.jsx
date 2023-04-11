import React from "react";
import CommentItem from "./CommentItem";

 function CommentList(props){
    
    const list = props.comments.map(function(item){
        return(
            <CommentItem key = {item.id}
                         content = {item.content}/>
        )
    })
    return(
        <div>
            {list}
        </div>
          )
}
export default CommentList;