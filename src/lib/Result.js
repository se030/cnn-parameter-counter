import React, {forwardRef} from 'react'
import "./Result.css"

function Result(prop, ref) {
  const format = (str) => {
    let substrings = [];
    for (let i=str.length; 0 < i; i -= 3) substrings.unshift(str.substring(i-3 < 0? 0 : i-3, i));
    return substrings.join(',');
  }
  return (
      <div className='result' ref={ref}>
        {prop.ch && (<div><span>Output Size</span>{prop.wh}×{prop.wh}×{prop.ch}</div>)}
        {prop.params && (<div><span>Parameters</span>{format(prop.params.toString())}</div>)}
      </div>
  )
}

export default forwardRef(Result)