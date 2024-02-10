import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [onAdd,upOnAdd] = useState(0);
  const [onAddTwo,upOnAddTwo] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     upOnAddTwo(onAdd*2);
  //   }, 1000);
  // },[onAdd]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     upOnAdd(onAdd+1);
  //   }, 1000);
  // });
  
  return (
    <>
  <h1>{onAdd} Seconds</h1>
  <h3>{onAddTwo}</h3>
    </>
  );
}

export default App;
