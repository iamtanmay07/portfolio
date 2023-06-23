import React from "react";
import { Github } from "react-bootstrap-icons";
import { SiCodechef, SiLeetcode, SiLinkedin } from "react-icons/si";
import "../css/Footer.css";


function Footer(){
    return <div className="footerrr full-width-div">
    <footer>
    <div class="col-md-12">
      <div class="social-links">
        <span class="m-4">
          <a href="https://github.com/iamtanmay07" target="_blank" rel="noopener noreferrer">
            <Github className="icons"/>
          </a>
        </span>

        <span class="m-4">
          <a
            href="https://linkedin.com/in/iamtanmay07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="icons" />
          </a>
        </span>
        <span class="m-4">
          <a
            href="https://www.codechef.com/users/tonikroos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodechef className="icons" />
          </a>
        </span>
        <span class="m-4">
          <a
            href="https://leetcode.com/tanmey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="icons" />
          </a>
        </span>

      </div>
      <div class="copyright text-center">
        <div class="container">
          <small> Copyright © 2023 | Made with ❤️ by Tanmay</small>
        </div>
      </div>
    </div>
  </footer>
  </div>
}

export default Footer;