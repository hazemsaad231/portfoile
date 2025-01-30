import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import 'aos/dist/aos.css';
function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);


    useEffect(() => {
        Aos.init({
          duration: 1000,  // مدة التأثير
          once: true,  // التأثير يتم مرة واحدة فقط عند التمرير
        });
      }, []);



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
    if (form.current) {
      emailjs.sendForm("service_d4zl58r","template_88st5sc",form.current,"4FaHP8sRoJMBOwwjc")
        .then(() => alert("message sent successfully"))
        .catch((error) => console.error("Error sending email:", error));
        setEmail('');
        setMessage('');
        setName('');
      
    }
   
  };

  return (
    <div id="contact" className='py-40 px-8' style={{fontFamily:"serif"}}>
      <div className=" flex flex-col justify-center items-center gap-4" data-aos="fade-up">
        <div className="">
          <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-center text-blue-700 py-12'>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            noValidate
            autoComplete="off"
          
          >
            <form onSubmit={sendEmail} ref={form}>
           
            <div className='flex flex-col justify-center gap-5 w-full'>
            <div className='flex flex-col gap-5 my-5 '>
              <TextField
                required
                name='name'
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                sx={{bgcolor:"#F5F5F5"}}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                name='email'
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                sx={{bgcolor:"#F5F5F5"}}

                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>


            <TextField
              required
              id="outlined-multiline-static"
              name='message'
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              value={message}
              sx={{bgcolor:"#F5F5F5"}}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type='submit' variant="contained"  endIcon={<SendIcon />}className='bg-blue-600 hover:bg-blue-800'>
              Send
            </Button>
           
            </div>
           </form>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;

