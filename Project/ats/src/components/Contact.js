import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import contimg from '../assets/contactpic.png';
import map from '../assets/map.png';
import abt1 from '../assets/abt1.jpg';
import abt2 from '../assets/abt2.webp';
import abt3 from '../assets/abt3.webp';
import abt4 from '../assets/abt4.webp';
import abt5 from '../assets/abt5.jpg';
import abt6 from '../assets/abt6.jpg';
import abt7 from '../assets/abt7.webp';
import instagramIcon from '../assets/instagramIcon.jpg';
import facebookIcon from '../assets/facebookIcon.webp';
import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubIcon.png';
import twitterIcon from '../assets/twitterIcon.png';
import youtubeIcon from '../assets/youtubeIcon.png';
const Contact = () => {
  const [isContacting, setContacting] = useState(false);

  const socialMediaUrls = {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    twitter: 'https://twitter.com/',
    youtube: 'https://www.youtube.com/',
  };

  const handleButtonClick = () => {
    setContacting(true);
    alert('Contacting...');
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mj34b88', 'template_8in0txp', form.current, 'F5gBsreBsnCjfREQu')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent Successfully !")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(e);
  };

  return (
    <div className='main'>
      <div className='contimg'>
        <img src={contimg} alt=""></img>
      </div>
      <div className='mapimg and container'>
        <img src={map} alt=""></img>
        
      <div className="card">
        <section>
          <div className='email'>
            <h2 className='--text-center'>Contact US</h2>
            <form ref={form} onSubmit={sendEmail} className='--form-control'>
              <input type='text' placeholder='Full Name' name='user_name' required class='raleway-input' />
              <input type='email' placeholder='Email ID' name='email_id'  required class='raleway-input' />
              <input type='text' placeholder='Subject' name='subject'  required class='raleway-input' />
              <textarea name='message' placeholder='Message' cols="30" rows="5" class='raleway-input'></textarea>
              <button type="submit" className='--btn' >Send Message</button>
            </form>
          </div>
        </section>
      </div>
      </div>

      <button
        className='contactButton'
        onClick={handleButtonClick}
        onMouseEnter={() => setContacting(false)} // Reset state on hover
      >
        {isContacting ? 'Contacting...' : 'Contact'}
      </button>

      <div className="cnt1">
        <div className="let1">
          <h1>Dublin (European HQ)</h1>
        </div>
        <div className='pi11'>
          <p>1 Sir John Rogerson's Quay, Dublin 2</p>
        </div>
        <div className="par1">
          <p>+353 1 5187500</p>
        </div>

        <div className='sp1'>
          <img src={abt1} alt="" />
        </div>
      </div>

      <div className='cnt2'>
        <div className="let2">
          <h1>Dublin (European HQ)</h1>
        </div>
        <div className='pi22'>
          <p>1 Sir John Rogerson's Quay, Dublin 2</p>
        </div>
        <div className="par2">
          <p>+353 1 5187500</p>
        </div>

        <div className='sp2'>
          <img src={abt2} alt="" />
        </div>
      </div>

      <div className='cnt3'>
      <div className="let3">
          <h1>Dublin (European HQ)</h1>
        </div>
        <div className='pi33'>
          <p>1 Sir John Rogerson's Quay, Dublin 2</p>
        </div>
        <div className="par3">
          <p>+353 1 5187500</p>
        </div>

        <div className='sp3'>
        <img src={abt3} alt="" />
      </div></div>


      <div className='cnt4'>
      <div className="let4">
          <h1>Dublin (European HQ)</h1>
        </div>
        <div className='pi44'>
          <p>1 Sir John Rogerson's Quay, Dublin 2</p>
        </div>
        <div className="par4">
          <p>+353 1 5187500</p>
        </div>

        <div className='sp4'>
        <img src={abt4} alt="" />
      </div></div>

      <div className='cnt5'>
      <div className="let5">
          <h1>Dublin (European HQ)</h1>
        </div>
        <div className='pi55'>
          <p>1 Sir John Rogerson's Quay, Dublin 2</p>
        </div>
        <div className="par5">
          <p>+353 1 5187500</p>
        </div>

        <div className='sp5'>
        <img src={abt5} alt="" />
      </div></div>

       
      <div className='cnt6'>
      <div className="let6">
          <h1>Dublin (European HQ)</h1>
        </div>
        <div className='pi66'>
          <p>1 Sir John Rogerson's Quay, Dublin 2</p>
        </div>
        <div className="par6">
          <p>+353 1 5187500</p>
        </div>

        <div className='sp6'>
        <img src={abt6} alt="" />
      </div></div>

       
      <div className='cnt7'>
      <div className="let7">
          <h1>Dublin (European HQ)</h1>
        </div>
        <div className='pi77'>
          <p>1 Sir John Rogerson's Quay, Dublin 2</p>
        </div>
        <div className="par7">
          <p>+353 1 5187500</p>
        </div>

        <div className='sp7'>
        <img src={abt7} alt="" />
      </div></div>

      <div className='hii'>
        <h1 className='hi-text'>hi</h1>
        <h1 className='hi-text'>hi</h1>
       
      </div>
      <div className='social-icons-container'>
        <a href={socialMediaUrls.instagram} target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href={socialMediaUrls.facebook} target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href={socialMediaUrls.linkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href={socialMediaUrls.github} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href={socialMediaUrls.twitter} target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a href={socialMediaUrls.youtube} target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
