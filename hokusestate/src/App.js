import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {List} from './List';
import Obj from './Obj';
import Todo from './Todo';
import CForm from './CForm';
function App() {
  const [name, setName] = useState("Hello World");
  const clickBtn = () => {
    if (name == "Hello World") {
      setName("Dekho World");
    } else {
      setName("Hello World");
    }
  }
  return (
    <>
      <h1>{name}</h1>
      <button onClick={clickBtn}>Toggle</button>
      <List/>
      <Obj/>
      <Todo/>
      <CForm/>
    </>
  );
}

export default App;
