import React from 'react';
import "./Terminal.css";
import { BsCircleFill } from 'react-icons/bs';


function Terminal(props) {
   const {text} = props;

   return (
    <div class="terminal" >

    <div class="terminal-header" style={{display: 'flex', justifyContent:'flex-start'}} >
      <BsCircleFill style={{color:"#cc0000"}} className='corner'/>
      <BsCircleFill style={{color:"#ffcf21"}} className='corner'/>
      <BsCircleFill style={{color:"green"}} className='corner'/>
    </div>

    <div class="terminal-content">
      {text}
    </div>

  </div>
   );
}

export default Terminal;