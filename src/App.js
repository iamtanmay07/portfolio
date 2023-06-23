import React from 'react';

// Importing CSS
import './css/App.css';
import './css/root.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Components
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Particle from './components/Particle';
import Academics from './components/Academics';
import ContactMe from './components/ContactMe';
import Footer from "./components/Footer";
import Project from './components/Projects/Project';

function App() {

  return (
    <div className="App ts">
      <Navigation />
      <header className= "App-header" >
      
        <section>
        <Particle className='particle-js'/>
        <Profile className='ts'/>
        </section>


      </header>
        <a name="aboutme" />
        <AboutMe />
        <a name="education" />
        <Academics />
        {/* 
        <Education /> */}
        <Skills />
        <Project />
        <a name="contactme" />
        <ContactMe />
      <Footer className='full-width-div'/>
    </div>
  );

  
}

export default App;
