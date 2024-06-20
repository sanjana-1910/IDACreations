import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './About.css';
import abtimg from '../images/about-vr.jpg'

const About = () => {

  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["IDA Creations!"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='container'>
      <div className='about'>
        <h2 className='ahead'>Welcome to <span className='auto-type'></span></h2>
      </div>
      <div className='para'>
        <h1>About Us</h1>
        <h2>We <span>IDA - Industrial Design and Animation</span> is a creative and Innovative Digital Retransformation organisation with Focus the stream on both Web 3.0 and Industry 4.0 solutions. We Transform and <span>elevate your Insustry and Business With Immersive Technical solution</span> with extensiveand wide range of Imagination that becomes Possible.

          We @IDA Transform your needs and reinvent the Your business for upcoming digital future. We create and design based on your needs with technologies like <span>AR ( Augmented Reality ), VR( Virtual Reality ), MR( Mixed Reality ) and XR( eXtended Reality )</span>.
         </h2>
         <h2> Join Us into the Immersive Future!</h2>
         <button className='about-btn'>Learn More</button><br></br>
         <img src={abtimg} alt="" className='abt-banner'/>
      </div>  

    
      
      

      <div className='vis-head'>
      <h1>Our Vision and Mission</h1>
      <h2>Excellence in every endeavor!</h2>
      </div>
      
      <div className='vision-mission'>
        <div className='vision'>
        <h1>VISION</h1>
        <h2>At IDA Creations, our vision is to be a pioneering force in innovation and creativity, transforming ideas into impactful solutions that inspire and enrich lives globally.</h2>
      </div>  
      
      <div className='mission'>
      <h1>MISSION</h1>
        <h2>Our mission at IDA Creations is to push the boundaries of technology and creativity, delivering exceptional products and services that exceed expectations,and ensure quality.</h2>
      </div>
      </div>

    </div>
  );
}

export default About;

