import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from './Header';

function Contact() {
  let contactNavigate = useNavigate();
  return (
    <>
<main>
    <section>
      <h1>Contact Page</h1>
      <button onClick={() => contactNavigate('/about')}>go to About Page</button>
    </section>
</main>
</>
  )
}

export default Contact
