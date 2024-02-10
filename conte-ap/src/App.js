import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CompFour from './CompFour';
import Firts from './auth';

function App() {
  const [logIn,updateAth] = useState(false);
const onLog = () => {
  updateAth(true);
}
const onOut = () => {
  updateAth(false);
}
  return (
  <>
    <h1>Hello World</h1>
    <Firts.Provider value={{logIn,onLog,onOut}}>
      <CompFour/>
    </Firts.Provider>
  </>
  );
}

export default App;
// export {Firts};
