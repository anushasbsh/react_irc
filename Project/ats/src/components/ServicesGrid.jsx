import './Services.css';
import React from 'react';
import { Services } from './Services'; // Import your AboutUs component
import iim from '../assets/Screenshot 2023-12-19 113445.png';
import cys from '../assets/cys.png';
import iot from '../assets/iot.jpeg';
import ai from '../assets/ai.jpg';
import ml from '../assets/ml.jpg';
import web from '../assets/web.webp';
import bc from '../assets/bc.jpeg';
import devops from '../assets/devops.jpg';
import net from '../assets/net.jpg';
const ServicesGrid = () => {
  return (
    <div className='ca'> 
      {/*  row of cards */}
      <Services
        image={cys}
        name="Cyber Security"
        content="Cybersecurity training in IT companies is crucial for safeguarding sensitive information, preventing cyber threats, and ensuring the integrity, confidentiality, and availability of digital assets."
      />
      <Services
        image={iot}
        name="Internet of Things"
        content="IoT training empowers professionals to design and secure interconnected devices, enabling the seamless integration of physical and digital environments."
      />
      <Services
        image={ai}
        name="Artficial Intelligence"
        content="AI training equips individuals with the skills to create intelligent systems, automate processes, and make data-driven decisions."
      />
      <Services
        image={ml}
        name="Machine Learning"
        content="ML training enables practitioners to develop algorithms that learn from data, making predictions and uncovering insights without explicit programming."
      />
      <Services
        image={web}
        name="Web Development"
        content="Web development training equips individuals to create interactive and responsive websites, ensuring a dynamic and engaging online user experience."
      />
      <Services
        image={bc}
        name="Block-Chain"
        content="Blockchain training empowers professionals to understand and implement decentralized and secure transactions, fostering trust in digital interactions."
      />
      
      <Services
        image={devops}
        name="Dev-Ops"
        content="DevOps training enables collaboration between development and IT operations, fostering efficiency, continuous integration, and delivery in software development."
      />
      <Services
        image={net}
        name="Networking"
        content= "Networking training provides essential skills to design, implement, and manage computer networks, ensuring seamless communication and connectivity in IT environments."
      />
      
      <div className='txx'>
        <h1>Initial 3 months of development training in the above given courses</h1>
       </div>
       <div className='ll'>
       <p>_________________________________________________________________________________</p>
       </div>
      <div className='tx'>
        <div className='xt'>
        <h1>Trusted by 10,000 recruitment teams in 135+ countries</h1>
        </div>
        <div className='ii'>
           <img src={iim} alt=""></img>
        </div>
       <div className='hi'></div>
        
        </div>
    
     
    </div>
  );
}

export default ServicesGrid;