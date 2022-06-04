import React, { useState, forwardRef } from 'react'
import "./Layer.css";

function FC(prop, ref) {
    const [nodes, setnodes] = useState();

  return (
    <div className='layer' ref={ref} nodes={nodes}>
        <p>FC</p>
        <div className="input-elem">
          <div><span>Nodes</span><input value={nodes} onChange={(e)=>setnodes(e.target.value)}></input></div>
        </div>
    </div>
  )
}

export default forwardRef(FC)