import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Success.css'; // Import the CSS file
import gif from '../assets/gif.gif';
import Button from '@mui/material/Button';
import gtick from '../assets/gtick.gif';

const Success = () => {
    const [showButton, setShowButton] = useState(false);
    const [processingText, setProcessingText] = useState("Your Application is being processed, please wait for a few seconds");
  
    useEffect(() => {
      const processingTimeout = setTimeout(() => {
        setShowButton(true);
        setProcessingText("Your Response has been submitted");
      }, 2500);
  
      return () => clearTimeout(processingTimeout);
    }, []);
  
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/Home'); // Update the route path accordingly
    };
  return (
    <div className="processing-container">
      <h1 className="processing-text">{processingText}</h1>
      <div className='load'>
      {showButton ? (
          <div className="gtick-container">
          <img className="gtick-gif" src={gtick} alt="Success" />
        </div>
        ) : (
          <img className="loading-gif" src={gif} alt="Loading" />
        )}
  
      </div>

      {showButton && (
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
         Go to Home
       </Button>
      )}

      <div className='hiii'>
        <h1 className='hii-text'>hi</h1>
        <h1 className='hii-text'>hi</h1>
        <h1 className='hii-text'>hi</h1>
        <h1 className='hii-text'>hi</h1>
        <h1 className='hii-text'>hi</h1>
        
      </div>
    </div>
  );
};

export default Success;