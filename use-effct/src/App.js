import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [inc,updInc] = useState(0);
  useEffect(() => {
    // console.log(inc)
     inc > 0 ? document.title = `Count : ${inc}` : document.title = `Count`;
  })
  return (
    <>
    <h1>{inc}</h1>
    <button onClick={() => updInc(inc+1)}>Increment</button>
    </>
  );
}
export default App;