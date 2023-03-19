// import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

const App = () => {
  //code here
  const [value1, setValue1] = useState(false);
  const [inpval,setInput] = useState("");
  const [inp,setInput2] = useState(false);

  const inputRef = useRef(null);
  
  function HandleClick() {
    // inpval = inputRef.current.value;
    setInput(inputRef.current.value)
    console.log(inpval);
    // inputRef.current.value="";
  }

  return (
    <div id="main" className='app'>
      <Sidebar />
      <Feed show1={setValue1} commentinp={inpval} is_inp={inp} setInputfun={setInput2} />
      <Widget />
      {
        value1?
        <div className='cmntbox'>
          <div className='cmntboxchild'>
            <button onClick={()=>{setValue1((p)=>!p); HandleClick()}}>Close</button>
            <input type="text" ref={inputRef} />
          </div>
        </div>:null
      }
    </div>
  )
}

export default App;
