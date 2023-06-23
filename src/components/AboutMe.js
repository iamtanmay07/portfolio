
import React from 'react';
import '../css/AboutMe.css';



import About from './About/About';
const AboutMe = () => {
  return (
    <section id='about'>
      <h5>About Me</h5>
      
      <div className='container about_container'>
      <About />
      </div> 
    </section>
  )
}

export default AboutMe;