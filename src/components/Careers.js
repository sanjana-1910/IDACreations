import React from 'react'
import './Careers.css'
import car from '../images/career.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ser5 from '../images/ser5.jpg'

const Careers = () => {
  return (
    <div className='careers'>
      <div className='car1'>
        Join our <span className='team'>TEAM</span>
      </div>

      <div className='car2'>
        <p>Join the innovative team at IDA Creations and be a part of transforming ideas into groundbreaking solutions.
          Discover exciting career opportunities where creativity and technology converge to shape the future.</p>

      </div>
      <p className='pa'>Elevate your career at IDA Creations, where innovation meets excellence. Explore dynamic opportunities to grow and make a real impact in a cutting-edge environment.</p>

      <div className='next'>
        <img src={car} alt="" className='careerimg' />
      </div>

      <div className='car-position'>
        OPEN POSITIONS
      </div>

      <div className='maincard'>
        <div className='flex'>
          <Card className='cards' style={{ width: '20rem' }}>

            <Card.Body>
              <Card.Title className='card-title1'>Front end developer</Card.Title>
              <Card.Text className='card-content'>
                Experience: 0 - 1 Years
              </Card.Text>
              <Button className="cardbtn1" variant="primary">Apply now</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='flex'>
          <Card className='cards' style={{ width: '20rem' }}>
            {/* <Card.Img className='cardimg' variant="top" src={ser5} style={{ width: '20rem',height:'13rem' }} /> */}
            <Card.Body>
              <Card.Title className='card-title1'>Video Editor</Card.Title>
              <Card.Text className='card-content'>
                Experience: 0 - 1 Years
              </Card.Text>
              <Button className="cardbtn1" variant="primary">Apply now</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='flex'>
          <Card className='cards' style={{ width: '20rem' }}>
            {/* <Card.Img className='cardimg' variant="top" src={ser5} style={{ width: '20rem',height:'13rem' }} /> */}
            <Card.Body>
              <Card.Title className='card-title1'>UI/UX Designer</Card.Title>
              <Card.Text className='card-content'>
                Experience: 0 - 1 Years
              </Card.Text>
              <Button className="cardbtn1" variant="primary">Apply now</Button>
            </Card.Body>
          </Card>
        </div>

      </div>

    </div>




  )
}

export default Careers
