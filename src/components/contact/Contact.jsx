import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

   
  };

  return (
    <div id="contact" className='py-32 px-8' style={{fontFamily:"serif"}}>
      <div className=" flex flex-col justify-center items-center gap-4">
        <div className="">
          <h1 className='text-5xl py-5'>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
          
          >
           
            <div className='flex flex-col justify-center gap-5 w-full'>
            <div className='flex flex-col gap-5 my-5 '>
              <TextField
                required
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
            <Button variant="contained"  endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
           
            </div>
           
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;