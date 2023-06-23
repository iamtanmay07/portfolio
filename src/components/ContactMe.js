import React from 'react';
import '../css/ContactMe.css';
import {HiOutlineMail} from 'react-icons/hi';
import { BsLinkedin} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { SiLeetcode } from 'react-icons/si';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uln9ao3', 'template_0okn4e4', form.current, '5wqVyge_3k-MNIbEq')
      
    e.target.reset()
  };

  return (
    <div id='contact'>
      <h5>Get in Touch</h5>
      <p> ohh wow !! You made it through here ✨  let's connect then 🤌
      
       </p>
      <div className='container contact_container'>
        <div className='contact_options'>
             <article className='contact_option'>
                <HiOutlineMail className='contact_option-icon'/>
                <h4>Email</h4>
                <a href='mailto:tanmaypatel26704@gmail.com' target='_blank' rel='noreferrer'>
                  send a mail
                </a>
             </article>    

             <article className='contact_option'>
                <BsLinkedin className='contact_option-icon'/>
                <h4>linkedin</h4>
                <a href='https://linkedin.com/in/iamtanmay07' target='_blank' rel='noreferrer'>
                  lets connect at Linkedin
                </a>
             </article>    

             <article className='contact_option'>
                <SiLeetcode className='contact_option-icon'/>
                <h4>Leetcode</h4>
                <a href='https://github.com/iamtanmay07' target='_blank' rel='noreferrer'>
                  850+ problems solved  
                </a>
             </article>    
        </div>
        <form ref={form} onSubmit={sendEmail} className='submit'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='6' required > </textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe;