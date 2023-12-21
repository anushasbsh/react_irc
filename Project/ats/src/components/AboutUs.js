import React from 'react';
import sp from '../assets/abp1.webp';
import apic1 from '../assets/apic1.webp';
import apic2 from '../assets/apic2.png';
import star from '../assets/star.png';
import './AboutUs.css';
import personIcon1 from '../assets/icon.png';
import personIcon2 from '../assets/personIcon2.png';
import personIcon3 from '../assets/personIcon3.png';
import personIcon4 from '../assets/personIcon4.png';
import personIcon5 from '../assets/personIcon5.png';
function AboutUs() {
  return (
    <div className="home-hc">
      <div className="w">

        {/* First Set of Content */}
        <div className="cnt">

          <div className="let">
            <h1>Easy-to-use Recruitment Software</h1>
          </div>
          <div className='pi'>
            <p>Share your job openings on 2,500+ free and premium channels, including local, global, and specialized job platforms such as Indeed, LinkedIn, Monster, CareerJet, JobStreet, and many more.</p>
          </div>
          <div className="par">
            <ul>
              <li>
                <p><strong>Customizable pipeline:</strong> Customize your recruitment pipeline based on your process with a slick drag-and-drop interface.</p>
              </li>
              <li><p><strong>Kanban board:</strong> Get an overview of your recruitment progresses in one single-board view.</p></li>
            </ul>
          </div>
          <div className="pi">

          </div>

          <div className="b">

          </div>
        </div>

        <div className='sp'>
          <img src={sp} alt="" />
        </div>

        {/* Second Set of Content */}
        <div className="cnt">

          <div className="let">
            <h1>AI-Powered Recommendations</h1>
          </div>
          <div className='pi'>
            <p>HireHouse's AI Engine simplifies the whole hiring process by suggesting the best candidates for a given job while automating redundant tasks.</p>
          </div>
          <div className="par">
            <ul>
              <li>
                <p><strong>Matching recommendations:</strong> Score candidates' profiles based on job requirements to facilitate your screening process.</p>
              </li>
              <li><p><strong>Candidates' profiles enrichment: </strong>Enrich candidates' profiles with LinkedIn and other social media data for better matching recommendations.</p></li>
            </ul>
          </div>
          <div className="pi">

          </div>

          <div className="b">

          </div>
        </div>

        <div className='sp'>
          <img src={apic1} alt="" />
        </div>

        {/* Third Set of Content */}
        <div className="cnt">

          <div className="let">
            <h1>Candidate Onboarding & Placement </h1>
          </div>
          <div className='pi'>
            <p>Track and manage every new hire or placement throughout every step of their employment experience, from offer letter to onboarding and beyond. Leverage the full potential of HireHouse's recruiting software.</p>
          </div>
          <div className="par">
            <ul>
              <li>
                <p><strong>Keep track of onboarding events </strong> such as starting dates, probation periods, or end of employment.</p>
              </li>
              <li><p><strong>Customize onboarding milestones </strong> for a given job.</p></li>
            </ul>
          </div>
          <div className="pi">

          </div>

          <div className="b">

          </div>
        </div>

        <div className='sp'>
          <img src={apic2} alt="" />
        </div>
        <div className='tra'>
          <h1>Transform the Way You Recruit Today.</h1>
        </div>
        <div className='pra'>
          <p>World-leading Recruitment Software for Talent Acquisition and Recruitment Professionals.</p>
        </div>
        <div className='ssp'>
          <img src={star} alt="" />
        </div>
        <div className='praa'>
          <p><strong>9,00,000+ </strong> Recruitment Processes | <strong>10,000+ </strong> Active Recruiting Teams | <strong>135+</strong> Trusting Countries</p>
        </div>
         
        <div className="customer-reviews">
          <div className="review-card">
         <img src={personIcon2} alt="Profile" className="profile-icon" />
    <div className="review-content">
      <h3>Michael</h3>
      <p>Review: "HireHouse has been a game-changer for our recruitment process. The customizable pipeline and AI-powered recommendations have significantly streamlined our hiring, making it more efficient than ever."</p>
    </div>
  </div>
          <div className="review-card">
          <div className="review-content">
          <img src={personIcon1} alt="Profile" className="profile-icon" />
            <h2>Emily</h2>
            <p> "As a recruiter, I can't recommend HireHouse enough. The candidate onboarding and placement features are top-notch, providing a seamless experience from offer letter to onboarding. Truly a powerful tool!"</p>
          </div>
          </div>
          <div className="review-card">
          <div className="review-content">
          <img src={personIcon3} alt="Profile" className="profile-icon" />
            <h2>Daniel</h2>
            <p>"Impressed with the AI engine of HireHouse! It not only matches candidates perfectly but also enriches their profiles for a comprehensive view. It has elevated our screening process to a whole new level."</p>
          </div>
          </div>
          <div className="review-card">
          <div className="review-content">
          <img src={personIcon4} alt="Profile" className="profile-icon" />
            <h2>James</h2>
            <p>"HireHouse has become an integral part of our recruiting strategy. The Kanban board and easy sharing on various job platforms have made our job easier. It's user-friendly and incredibly effective."</p>
          </div>
          </div>
          <div className="review-card">
          <div className="review-content">
          <img src={personIcon5} alt="Profile" className="profile-icon" />
            <h2>Charles</h2>
            <p>"Outstanding experience with HireHouse! The software's intuitive interface, coupled with the ability to customize onboarding milestones, has given us the flexibility we need. A must-have for any recruiting team."</p>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;