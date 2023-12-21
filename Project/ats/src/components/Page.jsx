import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';
import shot from '../assets/shot.webp';
import Button from '@mui/material/Button';
import rect from '../assets/Screenshot 2023-12-19 151533.png';

const Page = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use useNavigate inside the component

  const handleButtonClick = () => {
    setMessage('Get Started');

    // Display a confirmation dialog with "OK" and "Cancel" buttons
    const confirmation = window.confirm('Are you sure you want to submit the application?');

    if (confirmation) {
      alert('APPLICATION LOADING... ');

      // Simulate loading time with a delay
      setTimeout(() => {
        navigate('/success');
      }, 1200);
    } else {
      // User clicked "Cancel"
      console.log('Application submission canceled.');
    }
  };

  return (
    <div>
      <div className='contain'>
        <div className="head">
          <div className="txt"></div>
          <div className="t">
            <h2>Application Form</h2>
          </div>
          <div className="under"></div>
        </div>

        <div className="ips">
          <div className="ip">
            <input type="text" id="firstname" required placeholder='Firstname' />
          </div>
          <div className="ip">
            <input type="text" id="lastname" required placeholder='Lastname' />
          </div>
          <div className="ip">
            <input type="email" id="email" required placeholder='Email ID' />
          </div>
          <div className="ip">
            <input type="text" id="text" required placeholder='Company Name' />
          </div>
          <div className="ip">
         <input type="date" id="dob" required placeholder='Date of Birth' />
          </div>
          <div className="ip">
            <input type="number" id="phone" required placeholder='Phone number' />
          </div>
          <div className="ip">
    <label for="resume">_</label>
    <input type="file" id="resume" name="resume" accept=".pdf" required />
  </div>
  
  <div className="ip">
    
    <input type="url" id="linkedin" name="linkedin" placeholder="Enter LinkedIn Profile URL" />
  </div>
  <div className="ip">
    
    <input type="url" id="portfolio" name="portfolio" placeholder="Enter Portfolio URL" />
  </div>

  

    

 </div>

        <div className="but">
          <Button
            onClick={handleButtonClick}
            sx={{
              backgroundColor: '#4c00b4',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '10px',
              fontFamily: 'Raleway, sans-serif',
              fontSize: 'medium',
              transition: 'background-color 0.01s ease',
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            <span>Submit to Apply</span>
          </Button>
          
        </div>
      </div>
     
      <div className='sidepic'>
        <img src={shot} alt="Rectangle" />
      </div>

      <div className='siepic'>
       <h1>hi</h1>
       <h1>hi</h1>
       
      </div>
    </div>
  );
};

export default Page;
