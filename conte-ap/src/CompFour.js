import React,{useContext} from 'react';
import  Firts from './auth';
import CompThree from './CompThree';
import CompTwo from './CompTwo';
export default function CompFour() {
  let myCon = useContext(Firts);
  return (
    myCon.logIn ? <CompTwo/> : <CompThree />
  )
}
