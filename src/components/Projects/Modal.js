import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import { RxCross2 } from "react-icons/rx"
import {IoOpenOutline} from "react-icons/io5";

import Terminal from "./terminal";
const Modal = props => {
  const closeOnEscapeKeyDown = event => {
    if ((event.charCode || event.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  



  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>



          <div className="modal-header">
            <span className="modal-title"></span>
            <RxCross2 onClick={props.onClose} className="button" />
          </div>

          <div className="content">

            <Terminal url={props.foto} className="foto"
            />
            {/* <div className="foto">
              <img className="project-foto"
                    src={props.foto}
                    alt="project-foto"/>
            </div> */}
            <div className="details">
                <h5> {props.title} <span><a href={props.link} target="_block"  > <IoOpenOutline  className="link-icon"/> </a></span></h5> 
                <p>
                  {props.details}
                </p>
            </div>
            <div className="icons">
                {props.icon}
            </div>
          </div>



        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
