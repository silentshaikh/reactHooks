import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from './Header';
function About() {
  const aboutNavigate = useNavigate();
  return (
    <>
<main>
    <section>
      <h1>About Page</h1>
      <button onClick={() => aboutNavigate(-1)}>go back</button>
    </section>
</main>
</>
  )
}

export default About
