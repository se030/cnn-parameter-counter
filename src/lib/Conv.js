import React, { useState, forwardRef } from 'react'
import "./Layer.css";

function Conv(prop, ref) {
  const [fsize, setfsize] = useState();
  const [str, setstr] = useState();
  const [pad, setpad] = useState();
  const [ch, setch] = useState();

  return (
    <div className='layer' ref={ref} size={fsize} stride={str} padding={pad} channel={ch}>
      <p>CONV</p>
      <div className="input-elem">
        <div><span>Filter Size</span><input value={fsize} onChange={(e)=>setfsize(e.target.value)}></input></div>
        <div><span>Stride</span><input value={str} onChange={(e)=>setstr(e.target.value)}></input></div>
        <div><span>Padding</span><input value={pad} onChange={(e)=>setpad(e.target.value)}></input></div>
        <div><span>Channel</span><input value={ch} onChange={(e)=>setch(e.target.value)}></input></div>
      </div>
    </div>
  )
}

export default forwardRef(Conv)