import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import 'aos/dist/aos.css';
import { Toaster, toast } from 'react-hot-toast';
import { FaLinkedin, FaW } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
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
        .then(() =>toast.success("Email sent successfully"))
        .catch((error) => console.error("Error sending email:", error),
        );
        setEmail('');
        setMessage('');
        setName('');
      
    }
   
  };

  return (
    <>
    <Toaster/>
    <div id="contact" className='px-8 pb-8' style={{fontFamily:"sans-serif"}}>
      <div className=" flex flex-col justify-center items-center gap-4" data-aos="fade-up">
        <div className="">
          <h1 className='font-bold text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl bg-gradient-to-r from-indigo-700 to-white bg-clip-text text-transparent text-center py-10 tracking-[2px]'>Contact Me</h1>
           <div className='flex justify-center items-center gap-2 pb-4 '>
                    
                  <a href="https://www.linkedin.com/in/hazem-saad-719083282"><FaLinkedin className='text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl'/></a>
                  <a href="https://www.facebook.com/hazem.mahisin"> <FaFacebookSquare className='text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl mx-3 text-indigo-700'/></a>
                  <a href="https://wa.me/201062588052"> <FaWhatsapp className='text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl text-indigo-700'/></a>
          
          
                  </div>
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
                value={name}
                sx={{bgcolor:"white",borderRadius:"10px"}}
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
                sx={{bgcolor:"white",borderRadius:"10px"}}
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
              rows={5}
              value={message}
              sx={{bgcolor:"white",borderRadius:"10px"}}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type='submit' variant = 'contained'  endIcon={<SendIcon />}className='bg-gradient-to-r from-indigo-700 to-gray-100 rounded-full'>
              Send
            </Button>
           
            </div>
           </form>
          </Box>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;

