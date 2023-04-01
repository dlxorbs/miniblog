import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import $ from 'jquery'
import 'prismjs/themes/prism-tomorrow.css';

export default function Code(props) {


  const [code, setCode] = useState('')




    
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

    

  
  return (
    <div className='Code'>
      <pre contentEditable = 'true'>
        <code className={`language-javascript`}>
          {code}
        </code>
      </pre>

      <textarea className={`prism-live language-javascript`} value={code} placeholder='코드를 입력하세요' onChange = {function(e){ setCode(e.target.value) }}></textarea>
    </div>


  );
}