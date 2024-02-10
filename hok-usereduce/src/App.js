import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
const reducer = (stat,action) => {
  if(action.type === 'inc'){
    return stat = stat+1;
  }else if(action.type === 'dec'){
    // let num = 0;
    return stat >= 1 ? stat = stat-1 : stat =0;
  }
}
function App() {
  const [stat,dispatch] = useReducer(reducer,0);
  return (
    <>
      <h1>Use - Reducer</h1>
      <p>{stat}</p>
      <button onClick={() => dispatch({type:'inc'})}>Inc</button>
      <button onClick={() => dispatch({type:'dec'})}>Dec</button>
    </>
  );
}

export default App;
