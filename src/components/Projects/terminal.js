import React from 'react';
import "./terminal.css";
import { BsCircleFill } from 'react-icons/bs';


function Terminal(props) {

   return (
    <div class="terminall" >

    <div class="terminall-header" style={{display: 'flex', justifyContent:'flex-start'}} >
      <BsCircleFill style={{color:"#cc0000"}} className='corner'/>
      <BsCircleFill style={{color:"#ffcf21"}} className='corner'/>
      <BsCircleFill style={{color:"green"}} className='corner'/>
    </div>

    <div class="terminall-content">
      <img src={props.url} alt='modal' height='100%' width='100%' className='pic'/>
    </div>

  </div>
   );
}

export default Terminal;