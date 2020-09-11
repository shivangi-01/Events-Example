import React from 'react';
import './App.css';
import {useState} from 'react';

const Event =()=> {
  const purple= "#8e44ad";
  const[bg,setBg]=useState(purple);
  const[name,setName]=useState('click me');
  const bgColorChange=()=>{
 
   let newBg="#282c34";
   setBg(newBg);
   setName('clicked 🙋');
  }
  const bgDouble=()=>{
    setBg(purple);
    setName('Double clicked 🎉');
  }
  return (
   <>
<div style={{backgroundColor:bg}}>
 
  <button onClick={bgColorChange} onDoubleClick={bgDouble}><b> {name}  </b></button>

  </div>
</>
 
  );
}

export default Event ;
