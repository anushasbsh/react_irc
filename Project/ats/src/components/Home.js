// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import './Home.css';
import circle from '../assets/circle.png';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Page'); // Update the route path accordingly
  };

  return (
    <div className="home-container">
      <div className="whole">
        <div className="content">
          <div className="letter">
            <h1>Find your dream job now</h1>
          </div>
          <div className="para">
            <p>3lakh+ jobs for you to explore</p>
          </div>
          <div className="p">
            <p>AI Recruitment Software designed to source and hire candidates faster.</p>
          </div>
          <div className="b">
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
              Get Started
            </Button>
          </div>
        </div>

        <div className='sidpic'>
          <img src={circle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
