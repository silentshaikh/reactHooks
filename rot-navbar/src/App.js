import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Main from './Main';
function App() {
  return (
    <Routes>
    <Route path='/' element={<Main/>}>
      <Route index element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='*' element ={<Error/>}/>
    </Route>
    </Routes>
  );
}

export default App;
