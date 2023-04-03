import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import $ from 'jquery'
import 'prismjs/themes/prism-tomorrow.css';
import styles from './Textarea.module.css'



export default function Code(props) {


  const [code, setCode] = useState('')


  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  
  
  return (
    <div className={styles.Code}>
      <pre className= {styles.CodeWrapper}>
        <code className={`language-javascript ` }>
          {code}
        </code>
      </pre>

      <textarea className={`${styles.prismLive}`} 
                value={code} placeholder='코드를 입력하세요.' 
                onChange = {function(e){setCode(e.target.value)}}
                onKeyDown={function(e){
                  console.log(e.target.selectionStart)
                  if(e.keyCode==9){
                    const start = e.target.selectionStart
                    const end = e.target.selectionEnd
                    const tab = '\t'
                    e.target.value = code.substring(0, start) + tab + code.substring(end);
                    e.target.selectionStart = start+1;
                    e.target.selectionEnd = start+1;
                    e.preventDefault()
                    console.log(start)
                    // console.log(end)
                    setCode(e.target.value)

                  }
                }}></textarea>
    </div>

  );
}