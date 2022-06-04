import React, { useState, forwardRef } from 'react'
import "./Layer.css";

function Pool(prop, ref) {
    const [fsize, setfsize] = useState();
    const [str, setstr] = useState();

  return (
    <div className='layer' ref={ref} size={fsize} stride={str}>
        <p>POOL</p>
        <div className="input-elem">
          <div><span>Filter Size</span><input value={fsize} onChange={(e)=>setfsize(e.target.value)}></input></div>
          <div><span>Stride</span><input value={str} onChange={(e)=>setstr(e.target.value)}></input></div>
        </div>
    </div>
  )
}

export default forwardRef(Pool)