import React, {forwardRef} from 'react'
import "./Result.css"

function Result(prop, ref) {
  return (
      <div className='result' ref={ref}>
        
      </div>
  )
}

export default forwardRef(Result)