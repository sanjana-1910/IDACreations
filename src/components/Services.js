import React from 'react'
import './Services.css'
import ser1 from '../images/ser1.jpg'
import ser2 from '../images/ser2.jpg'
import ser3 from '../images/servv3.jpg'
import ser4 from '../images/ser4.jpg'
import ser5 from '../images/ser5.jpg'
import ser6 from '../images/ser6.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Services = () => {
  return (
    <div className='services'>
      <div className='servicehead'>
        Our Services
      </div>

      <div className='maincard'>

        <div className='flex'>
          <Card className='cards' style={{ width: '20rem' }}>
            <Card.Img className='cardimg' variant="top" src={ser1} style={{ width: '20rem' }} />
            <Card.Body>
              <Card.Title className='card-title'>Game Development</Card.Title>
              <Card.Text className='card-content'>
                At IDA Creations, we specialize in game development, creating immersive and engaging experiences that captivate players. Our dedicated team leverages the latest technologies to design high-quality games.
              </Card.Text>
              <Button className="cardbtn" variant="primary">Know More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='flex'>
          <Card className='cards' style={{ width: '20rem' }}>
            <Card.Img className='cardimg' variant="top" src={ser2} style={{ width: '20rem' }} />
            <Card.Body>
              <Card.Title className='card-title'>AI/ML</Card.Title>
              <Card.Text className='card-content'>
                At IDA Creations, we specialize in AI/ML solutions, developing intelligent systems that drive innovation and efficiency. Our expert team harnesses advanced algorithms and cutting-edge technology solutions.
              </Card.Text>
              <Button className="cardbtn" variant="primary">Know More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='flex'>
          <Card className='cards' style={{ width: '20rem' }}>
            <Card.Img className='cardimg' variant="top" src={ser3} style={{ width: '20rem', height: '14.5rem' }} />
            <Card.Body>
              <Card.Title className='card-title'>UI/UX</Card.Title>
              <Card.Text className='card-content'>
                At IDA Creations, we excel in UI/UX design, crafting intuitive and visually stunning interfaces that enhance user experiences. Our designers focus to create interactions.
              </Card.Text>
              <Button className="cardbtn" variant="primary">Know More</Button>
            </Card.Body>
          </Card>

        </div>

     =
        <div className='flex'>
          <Card className='cards' style={{ width: '20rem' }}>
            <Card.Img className='cardimg' variant="top" src={ser4} style={{ width: '20rem' }} />
            <Card.Body>
              <Card.Title className='card-title'>Motion Graphics</Card.Title>
              <Card.Text className='card-content'>
              At IDA Creations, we specialize in motion graphics, creating dynamic and captivating visual content that brings ideas to life. Our skilled team uses animation techniques to produce engaging motion graphics.
                </Card.Text>
              <Button className="cardbtn" variant="primary">Know More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='flex'>
          <Card className='cards' style={{ width: '20rem' }}>
            <Card.Img className='cardimg' variant="top" src={ser5} style={{ width: '20rem',height:'13rem' }} />
            <Card.Body>
              <Card.Title className='card-title'>Video Editing</Card.Title>
              <Card.Text className='card-content'>
              At IDA Creations, we excel in video editing, transforming raw footage into polished and compelling visual stories. Our talented editors utilize advanced software and techniques to craft seamless, high-quality videos. 
              </Card.Text>
              <Button className="cardbtn" variant="primary">Know More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='flex'>
          <Card className='cards' style={{ width: '20rem' }}>
            <Card.Img className='cardimg' variant="top" src={ser6} style={{ width: '20rem', height: '14rem' }} />
            <Card.Body>
              <Card.Title className='card-title'>3D Modelling</Card.Title>
              <Card.Text className='card-content'>
              At IDA Creations, we specialize in 3D modeling, creating realistic models that bring concepts to life. Our expert team uses advanced software to produce  3D representations for applications. 
              </Card.Text>
              <Button className="cardbtn" variant="primary">Know More</Button>
            </Card.Body>
          </Card>
        </div>
        

        </div>
      </div>






  )
}

export default Services
