import React from 'react';
import Home from './Home';
import About from './About';
import {Route,Routes} from 'react-router-dom';
import './App.css';
function App() {
  return (
   <>
  <Routes>
    <Route  path='/' Component={Home}/>
    <Route path='/about' Component={About}/>
    </Routes>
   {/* <Home/>
    <About/> */}
   </>
  );
}

export default App;
