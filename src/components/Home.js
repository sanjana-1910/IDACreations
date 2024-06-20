import React from 'react'
import './Home.css';
import img from '../images/Group 135 (1).svg'
import imgvr from '../images/homevr.jpg'
import imgvr1 from '../images/homevr1.jpg'

const Home = () => {
  return (
    <div className='home'>

      <h1 className='head'>Your strategic partner for seamless <br></br>user-brand connections, always on time</h1>
      <h4 className='subhead'>Crafting unique and beautiful experiences through design,website development</h4>
      <img className="google" src={img} alt="" />


      <div class="small">
        <h1>What we do</h1>
      </div>


      <div class="large">
        <p>Dream big, launch bigger! Let us be your guiding force from idea</p>
        <p>to creation!</p>
      </div>


      <div class="scope">
        <div class="tabs">
          <div class="yellowLine">
            <h2>RESEARCH</h2>
            <p class="tab_contents">Discover the essence of your audience with our powerful, data-driven
              insights that harmonize with the user's perspective, effortlessly aligning with your
              business goals.</p>
            <a href="#" id="open-popup1">@know more</a>
          </div>
        </div>
        <div class="tabs">
          <div class="greenLine">
            <h2>DESIGN</h2>
            <p class="tab_contents">Design is our collective masterpiece - Ideas curated through your unique
              input. We craft solutions that are scalable which withstands the challenges.</p>
            <a href="#" id="open-popup2">@Know More</a>
          </div>
        </div>

        <div class="tabs">
          <div class="blueLine">
            <h2>BUILD</h2>
            <p class="tab_contents">We specialize in transforming diverse designs into fully functional
              digital products, ranging from websites and mobile apps to comprehensive solutions.</p>
            <a href="#" id="open-popup3">@know more</a>
          </div>
        </div>
      </div>

      <div className='image'>
        <img className="vr" src={imgvr1} alt="" />
      </div>

      <div class="wordCollage">
        <p>AT THE <span class="violet">HEIGHT</span> OUR WORK IS AN AGILE PROCESS THAT EMPOWERS US TO SWIFTLY AND EFFICIENTLY RESOND TO ANY <span class="violet">CHANGES</span> OR <span class="violet">CHALLENGES</span> THAT MAY ARISE. OUR TEAM COLLABRATES WITH SHARED SENSE OF PASSION AND <span class="violet">ENJOYMENT</span>, WHICH DRIVES US TO DELIVER EXCEPTIONAL RESULTS. TAKE A LOOK AT OUR <span class="violet">PORTFOLIO</span> TO SEE YOURSELF</p>
      </div>

    </div>





  )
}

export default Home
