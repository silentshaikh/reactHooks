import React,{useContext,} from 'react';
// import CompThree from './CompThree';
// import { Firts } from './App';
import  Firts from './auth';
export default function CompTwo() {
  let onHome = useContext(Firts);
  const onOut = () => {
    onHome.onOut();
  }
    return(
    <button onClick={onOut}>Home</button>
  )
}
