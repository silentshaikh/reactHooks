import React, { useContext } from 'react'
import { contexApp } from './App'
function Child() {
    let cont = useContext(contexApp);
  return (
    <div>
      <p>My Name is {cont.name}. I Live in {cont.country}.</p>
    </div>
  )
}

export default Child;
