import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import styles from '../UI/Textarea.module.css'



export default function ContentCode(props) {



  return (
    <div className={styles.CodeContent}>
      <pre className= {styles.CodeWrapper}>
        <code className={`language-javascript ` }>
          {props.code}
        </code>
      </pre>
    </div>
  );
}