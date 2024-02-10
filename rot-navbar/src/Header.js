import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
       <header>
    <nav>
    <ul>
       <li><NavLink className='s' to='/'>Home</NavLink></li>
       <li><NavLink className='s'  to='/contact'>Contact</NavLink></li>
       <li><NavLink  className='s' to='/about'>About</NavLink></li>
     </ul>
    </nav>
  </header>
    </>
  )
}

export default Header

   
