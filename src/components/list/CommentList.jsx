import React from "react";
import CommentItem from "./CommentItem";
import moment from "moment";
import styles from "./List.module.css";

function CommentList(props) {
  const list = props.comments.map(function (item) {
    return (
      <CommentItem
        key={item.id}
        content={item.content}
        time={moment
          .unix(Math.floor(item.time / 1000))
          .startOf("min")
          .fromNow()}
      />
    );
  });
  return <div className={styles.CommentList_Wrapper}>{list}</div>;
}
export default CommentList;
