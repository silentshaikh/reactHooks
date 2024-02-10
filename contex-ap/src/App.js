import React,{createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';
let contexApp = createContext();
function App({children}) {
  let obj = {
    name:'Shaikh Abdul Moiz',
    country:'United Kingdom',
  }
  return (
    <>
      <h1>Context API</h1>
      <contexApp.Provider value={obj}>
    {children}
      </contexApp.Provider>
    </>
  );
}

export default App;
export {contexApp}