import React, { useState } from "react";
import Modal from "./Modal";
import Noteverse from "../media/Noteverse.png";
import SG1 from "../media/simongame2.png";
import port from "../media/portfolio.png";
import todo from "../media/todo.png";
import catch1 from "../media/catch1.png";
import GOAL from "../media/goal.png"
import Weatherr from "../media/weather.png"
import Dashboard from "../media/dashboard.png";
import Hoobank from "../media/hoobank.png";
import Relx from "../media/relx.png";
import "./Project.css";
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiBootstrap , SiTailwindcss , SiTypescript } from "react-icons/si";
import { FaFigma, FaNodeJs } from "react-icons/fa";
import { TbApi, TbBrandNextjs } from "react-icons/tb";



function Project() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  // const initialState = Array.from({ length: 6 }, () => false);
  // const [shows, setShow] = useState(initialState);

  // // Accessing individual show states
  // const [ show1, show2, show3, show4, show5, show6] = shows;
  return (
    <section id="portfolio">
      <div className="container project-main">
        <h5 className="section-title" style={{ color: "white" }}>
          <span> Projects </span>
        </h5>

        <div className="project_container">

          <div className="project_info" onClick={() => setShow10(true)}>
            <img
              src={Relx}
              alt="relx"
              className="project_photo"
              height="300px"
            />
            <h5> RelX </h5>
          </div>
          <Modal 
              title="RelX - ChatBot" 
              details="RelX is a versatile chatbot crafted with React, leveraging the OpenAI API for intelligent responses. Designed with CSS and JavaScript, its user interface is thoughtfully created in Figma for seamless interaction."
              icon = {[<SiReact className="icons"/>, <FaFigma className="icons"/>, <TbApi className="icons"/> ,<SiJavascript className="icons"/> , <SiCss3 className="icons"/> , <SiHtml5 className="icons" /> ]}
              foto={Relx}
              link="https://github.com/iamtanmay07/RadicalX-Gen_AI_Chat/blob/main/frontend/src/utils/api.js"
              onClose={() => setShow10(false)} 
              show={show10} >
          </Modal>


        <div className="project_info" onClick={() => setShow7(true)}>
            <img
              src={port}
              alt="Portfolio"
              className="project_photo"
              height="300px"
            />
            <h5> Portfolio </h5>
          </div>
          <Modal 
              title="Portfolio Website" 
              details="This is my portfolio showcases visually appealing web projects, highlighting my proficiency in HTML, CSS, and JavaScript, along with frameworks like React."
              icon = {[<SiReact className="icons"/> , <SiJavascript className="icons"/> , <SiCss3 className="icons"/> , <SiHtml5 className="icons" /> ]}
              foto={port}
              link=""
              onClose={() => setShow7(false)} 
              show={show7} >
          </Modal>

          <div className="project_info" onClick={() => setShow8(true)}>
            <img
              src={Dashboard}
              alt="dashboard"
              className="project_photo"
              height="300px"
            />
            <h5> Analytical Dashboard </h5>
          </div>
          <Modal 
              title="Analytical Dashboard"
              details="A sophisticated data visualization tool developed with Next.js and Tailwind CSS, offering insightful analytics and customizable reporting for informed decision-making."
              icon = {[<TbBrandNextjs className="icons"/> , <SiReact className="icons"/> , <SiTypescript className="icons"/> , <SiTailwindcss className="icons"/> ]}
              foto={Dashboard}
              link="https://github.com/iamtanmay07/dashboard-next"
              onClose={() => setShow8(false)} 
              show={show8} >
          </Modal>


          <div className="project_info" onClick={() => setShow9(true)}>
            <img
              src={Hoobank}
              alt="hoobank"
              className="project_photo"
              height="300px"
            />
            <h5> HooBank Template </h5>
          </div>
          <Modal 
              title="HooBank Template" 
              details="A dynamic frontend website created while mastering React.js, Tailwind CSS, and TypeScript, providing an immersive learning experience in web development with modern technologies."
              icon = {[ <SiReact className="icons"/> , <SiJavascript className="icons"/> , <SiTailwindcss className="icons"/> , <SiHtml5 className="icons" /> ]}
              foto={Hoobank}
              link="https://hoobank-react-website.vercel.app/"
              onClose={() => setShow9(false)} 
              show={show9} >
          </Modal>



          <div className="project_info" onClick={() => setShow(true)}>
            <img
              src={Weatherr}
              alt="weather-express"
              className="project_photo"
              height="300px"
            />
            <h5> Weather Express </h5>
          </div>
          <Modal 
              title="Weather Express" 
              details="A sleek weather finding app crafted with APIs, Node.js, JavaScript, HTML, and CSS, delivering real-time updates and personalized forecasts for users' convenience."
              icon = {[  <FaNodeJs className="icons"/> , <SiJavascript className="icons"/> , <SiCss3 className="icons"/> , <SiHtml5 className="icons" /> ]}
              foto={Weatherr}
              link="weather-expresss.onrender.com/"
              onClose={() => setShow(false)} 
              show={show} >
          </Modal>


          <div className="project_info" onClick={() => setShow2(true)}>
            <img
              src={Noteverse}
              alt="noteverse"
              className="project_photo"
              height="300px"
            />
            <h5> Noteverse </h5>
          </div>
          <Modal 
              title="Noteverse" 
              details="NoteVerse: A React-based note-taking app inspired by Google Keep. It features a sleek interface with Material-UI design components and utilizes React Icons for customizable icons. The technical stack includes HTML, CSS, and JavaScript.
You can add notes with its title and content and also delete the notes."
              icon = {[<SiReact className="icons"/> , <SiJavascript className="icons"/> , <SiCss3 className="icons"/> , <SiHtml5 className="icons" /> ]}
              foto={Noteverse}
              link="https://note-verse.netlify.app/"
              onClose={() => setShow2(false)} 
              show={show2} >
          </Modal>


          <div className="project_info" onClick={() => setShow6(true)}>
            <img
              src={GOAL}
              alt="goal"
              className="project_photo"
              height="300px"
            />
            <h5> G O A L </h5>
          </div>
          <Modal 
              title="G O A L" 
              details="GOAL : A bootstrap website built using HTML, CSS, Bootstrap, and a touch of JavaScript, designed to provide you with a complete football experience. Whether you're a passionate fan, a dedicated player, or simply curious about the beautiful game, GOAL has something for everyone."
              icon = {[<SiBootstrap className="icons"/> , <SiCss3 className="icons"/> , <SiHtml5 className="icons" /> ]}
              foto={GOAL}
              link="https://iamtanmay07.github.io/goal/"
              onClose={() => setShow6(false)} 
              show={show6} >
          </Modal>

          
          <div className="project_info" onClick={() => setShow3(true)} >
            <img
              src={SG1}
              alt="simon-game"
              className="project_photo"
              height="300px"
            />
            <h5> Simon Game </h5>
          </div>
          <Modal 
              title="Simon Game" 
              details="The Simon Game is a classic memory challenge built with HTML, CSS, and JavaScript. This iconic memory challenge tests your ability to remember and reproduce a sequence of colored buttons. With HTML providing the structural elements, CSS styling the visual presentation, and JavaScript handling the game logic."
              icon = {[<SiJavascript className="icons"/> , <SiCss3 className="icons"/> , <SiHtml5 className="icons" /> ]}
              foto={SG1}
              link="https://iamtanmay07.github.io/simon-game/"
              onClose={() => setShow3(false)} 
              show={show3} >
          </Modal>
        


          <div className="project_info" onClick={() => setShow4(true)}>
            <img
              src={todo}
              alt="to-do app"
              className="project_photo"
              height="300px"
            />
            <h5> To-Do App </h5>
          </div>
          <Modal 
              title="To-Do App" 
              details="To-do app is developed using the React framework, JavaScript, CSS, and HTML. Empowering users to efficiently add tasks, the app offers the convenience of deleting completed tasks with a single click."
              icon = {[<SiReact className="icons"/>, <SiJavascript className="icons"/> , <SiCss3 className="icons"/> , <SiHtml5 className="icons" /> ]}
              foto={todo}
              link="https://to-do-app-iamtanmay07.netlify.app/"
              onClose={() => setShow4(false)} 
              show={show4} >
          </Modal>





          <div className="project_info" onClick={() => setShow5(true)}>
            <img
              src={catch1}
              alt="catch1"
              className="project_photo"
              height="300px"
            />
            <h5> Catch me if you can ! </h5>
          </div>
          <Modal 
              title="Catch me If you can !" 
              details="Catch me If You Can, is a minimalistic Web Project Using HTML, CSS, and JavaScript. This simple yet engaging game challenges player/user to catch a moving box within a given timeframe."
              icon = {[<SiJavascript className="icons"/> , <SiCss3 className="icons"/> , <SiHtml5 className="icons" /> ]}
              foto={catch1}
              link="https://catch-mee.netlify.app/"
              onClose={() => setShow5(false)} 
              show={show5} >
          </Modal>




        </div>
      </div>
    </section>
  );
}

export default Project;
