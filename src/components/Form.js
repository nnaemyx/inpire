import "./FormStyles.css"
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react'

const Result = () => {
  return(
    <p>Your message has been successfully sent. we will contact you soon</p>
  )
}

export const Form = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
   
    e.preventDefault();

    emailjs.sendForm('service_bb5z5qf', 'template_ahy4n2t', form.current, 'FCapFn0IgAkzqMXEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

     form.current.reset();
     showResult(true); 
  };

  setTimeout(() =>{
    showResult(false)
  }, 5000);


  return (
    <div className="form">
        <h1 className="project-heading">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="name" ></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Subject</label>
            <input type="text" name="subject"></input>
            <label>Message</label>
            <textarea rows="6" 
            placeholder="Type your Message here" name="message"/>
            <button className="btn" value="send" type="submit">Submit</button>
            <div className="row">
              {result ? <Result/> : null}
            </div>
        </form>
    </div>
  )
}

export default Form