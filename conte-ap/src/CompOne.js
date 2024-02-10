import React from 'react';
import { Firts } from './App';
function CompOne() {
  return (
    <div>
      <Firts.Consumer>
    {(name) => {
        return <h1>My Name is {name}</h1>
    }}
      </Firts.Consumer>
    </div>
  )
}

export default CompOne;
