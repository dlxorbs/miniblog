import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import styles from './Textarea.module.css'



export default function Code(props) {



  return (
    <div className={styles.Code}>
      <pre className= {styles.CodeWrapper}>
        <code className={`language-javascript ` }>
          {props.code}
        </code>
      </pre>

      <textarea className={`${styles.prismLive}`} 
                value={props.value} placeholder='코드를 입력하세요.' 
                onChange = {props.onChange}
                onKeyDown={props.onKeyDown}></textarea>
    </div>
  );
}