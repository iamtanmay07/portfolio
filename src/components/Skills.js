import React from 'react';
import '../css/Skills.css';

import {SiCss3 , SiHtml5 , SiJavascript, SiBootstrap, SiReact, SiCplusplus, SiPython, SiMongodb} from 'react-icons/si';
import { RiCodeSSlashFill } from "react-icons/ri";
import { DiNetbeans } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Skills I Have</h5>
      <div className='container experience_container'>
        <div className='experience_frontend'>
           <h3>Web Development</h3>
           <div className='experience_content'>
            <article className='experience_details'>
                 <SiHtml5 className='experience_details-icon' />
                 <div>
                 <h4>HTML</h4>
                 <small>Experienced</small>
                 </div>
            </article>
            <article className='experience_details'>
                 <SiCss3 className='experience_details-icon' />
                 <div>
                 <h4>Tailwind-CSS</h4>
                 <small>Experienced</small>
                 </div>          
            </article>
            
            <article className='experience_details'>
                 <SiBootstrap className='experience_details-icon' />
                 <div>
                 <h4>Bootstrap</h4>
                 <small>Experienced</small>
                 </div>
            </article>

            <article className='experience_details'>
                 <SiJavascript className='experience_details-icon' />
                 <div>
                 <h4>Javascript</h4>
                 <small>Intermediate</small>
                 </div>
            </article>

            <article className='experience_details'>
                 <SiReact className='experience_details-icon' />
                 <div>
                 <h4>React</h4>
                 <small>Intermediate</small>
                 </div>
            </article>

            <article className='experience_details'>
                 <FaNodeJs className='experience_details-icon' />
                 <div>
                 <h4>NodeJS</h4>
                 <small>Beginner</small>
                 </div>
            </article>

            <article className='experience_details'>
                 <FaNodeJs className='experience_details-icon' />
                 <div>
                 <h4>ExpressJS</h4>
                 <small>Beginner</small>
                 </div>
            </article>

            <article className='experience_details'>
                 <SiMongodb className='experience_details-icon' />
                 <div>
                 <h4>MongoDB</h4>
                 <small>Beginner</small>
                 </div>
            </article>


            <article className='experience_details'>
                 <SiMongodb className='experience_details-icon' />
                 <div>
                 <h4>TypeScript</h4>
                 <small>Very Beginner</small>
                 </div>
            </article>   

            <article className='experience_details'>
                 <SiMongodb className='experience_details-icon' />
                 <div>
                 <h4>NextJS</h4>
                 <small>Working</small>
                 </div>
            </article>

           </div>
        </div>

        <div className='experience_programming'>
        <h3>Programming</h3>
           <div className='experience_content'>
            <article className='experience_details'>
                 <SiCplusplus className='experience_details-icon' />
                 <div>
                 <h4>C++</h4>
                 <small>Experienced</small>
                 </div>
            </article>

            <article className='experience_details'>
                 <DiNetbeans className='experience_details-icon' />
                 <div>
                 <h4>DSA</h4>
                 <small>Experienced</small>
                 </div>
            </article>

            <article className='experience_details'>
                 <RiCodeSSlashFill className='experience_details-icon' />
                 <div>
                 <h4>OOPs</h4>
                 <small>Intermediate</small>
                 </div>
            </article>

            <article className='experience_details'>
                 <SiPython className='experience_details-icon' />
                 <div>
                 <h4>Python</h4>
                 <small>Beginner</small>
                 </div>
            </article>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
