import React, { useState } from 'react'

function Input() {
    const [text, setText] = useState('')
    const [button, setButton] = useState(false)
  return (
    <>
        <div>Input</div>
        <input type="text" placeholder='Enter any text' onChange={(e) => setText(e.target.value)}/>
        <div style={{color: button? 'red':'black'}}>{text}</div>
        <button onClick={() => {setButton(!button)}}>Change Color</button>
    </>
  );
}

export default Input