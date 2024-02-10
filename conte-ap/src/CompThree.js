import React,{useContext} from 'react'
// import { Firts } from './App';
import  Firts from './auth';
export default function CompThree() {
  let authLog = useContext(Firts);
  // let name = useContext(Firts);
  const onLog = () => {
    authLog.onLog();
  }
  return (
   <>
    <button onClick={onLog}>Login</button>
   </>
  )
}
