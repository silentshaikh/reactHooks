import React, {useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Accordian from './Accordian/Accordian';
import { accordianData } from './Accordian/accorApi';
function App() {
  const [item,updateItem] = useState(accordianData);
  return (
    <>
       <h1 style={{fontSize:'4rem',marginBottom:"30px",textAlign:"center",WebkitTextStroke:'2px  #48dbfb',color:"transparent",fontFamily:"'Lobster', sans-serif"}}>Accordian</h1>
    <section>
            <div className="box">
    {
      item.map((element,index) => {
        return (
      <Accordian key={index} {...element}/>
        );
      })
    }
    </div>
    </section>
    </>
  );
}

export default App;
