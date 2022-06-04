import React, { useState, useRef } from 'react'
import Conv from './Conv'
import Pool from './Pool'
import FC from './FC'
import "./Counter.css"
import "./Layer.css"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Counter() {
  const [convLayer, setconvLayer] = useState([0]); // 0 for conv, 1 for pool
  const [fcLayer, setfcLayer] = useState([0]);
  const addConv = () => setconvLayer([...convLayer, 0]);
  const addPool = () => setconvLayer([...convLayer, 1]);
  const addFC = () => setfcLayer([...fcLayer, fcLayer.length]);

  const inputSize = useRef();
  const inputChannel = useRef();
  const conv = useRef([]);
  const fc = useRef([]);
  const results = useRef();
  const showResults = () => {
    let inputS = parseInt(inputSize.current.value);
    let inputCh = parseInt(inputChannel.current.value);
    let convSize, convStride, convPadding, convChannel, poolSize, poolStride, width, params, outputSize;

    conv.current.forEach((layer, idx) => {
      switch (convLayer[idx]) {
        // Conv
        case 0:
          convSize = parseInt(layer.getAttribute("size"));
          convStride = parseInt(layer.getAttribute("stride"));
          convPadding = parseInt(layer.getAttribute("padding"));
          convChannel = parseInt(layer.getAttribute("channel"));
          width = Math.floor((inputS + 2*convPadding - (convSize-1) - 1) / convStride + 1);
          params = (convSize * convSize * inputCh + 1) * convChannel;

          console.log(`${width}×${width}×${convChannel}`, params);
          inputCh = convChannel;
          break;
        // Pool
        case 1:
          poolSize = parseInt(layer.getAttribute("size"));
          poolStride = parseInt(layer.getAttribute("stride"));
          width = Math.floor((inputS - poolSize) / poolStride + 1)

          console.log(`${width}×${width}×${inputCh}`);
          break;

        default:
          break;
      }
      inputS = width;
    })

    let fcn = inputS*inputS*inputCh;
    fc.current.forEach(layer => {
      outputSize = parseInt(layer.getAttribute("nodes"));
      params = fcn * outputSize;
      console.log(params);
      fcn = outputSize;
    });
  };

  return (
    <div className="container">
      <h1>CNN Parameter Counter</h1>
      <div className = "body">
        <div className="layers">
          <div className="layer">
              <p>Input</p>
              <div className="input-elem">
                <div><span>W/H</span><input ref={inputSize}></input></div>
                <div><span>Channel</span><input ref={inputChannel}></input></div>
              </div>
          </div>
          {
            convLayer.map((item, idx) => (
              item === 0? <Conv key={idx} ref={el => conv.current[idx] = el}></Conv>
              : <Pool key={idx} ref={el => conv.current[idx] = el}></Pool>
            ))
          }
          {
            fcLayer.map((idx) => (<FC key={idx} ref={el => fc.current[idx] = el}></FC>))
          }
        </div>
        <div className="buttons">
          <button onClick={addConv}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Conv</button>
          <button onClick={addPool}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Pool</button>
          <button onClick={addFC}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>FC</button>
          <br/><button onClick={showResults}>Result</button>
        </div>
        <div className="results" ref={results}>
        </div>
      </div>
    </div>
  )
}

export default Counter