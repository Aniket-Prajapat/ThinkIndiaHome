import React from 'react'

import 'E:/Think India/client/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

import styled from 'styled-components'

const SectionContainer =styled.div`
.scroll {
  height: 1100px;
  overflow-x: hidden;
  overflow-y: auto;
}

.header {
  text-align: center;
  margin: 2px;
}

`;

const Sections = () => {

  return (<>  <SectionContainer>
  <h1 className="header">SECTIONS</h1>

  
 <div>
    <div className="container scroll" >
     


    <hr />
      <div className='container'>
        <Carousel>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?Art"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>ART AND DESIGN SECTION</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?design"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>ART AND DESIGN SECTION</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?painting"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>ART AND DESIGN SECTION</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>

<hr/>
      
      <div className='container ' >
        <Carousel>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?coder"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>DIY</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?Programming"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>DIY</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?Coding"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>DIY</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>

      <hr />
      <div className='container'>
        <Carousel>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?Debate"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>DEBATE SECTION</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?Discussion"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>DEBATE SECTION</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?speech"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>DEBATE SECTION</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
      <hr />
      <div className='container'>
        <Carousel>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?entrepreneur"
              alt="First slide"
            />
            <Carousel.Caption>ENTREPRENEUR SECTION      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?entrepreneurship"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>ENTREPRENEUR SECTION </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?entrepreneurs"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>ENTREPRENEUR SECTION </h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>





      <hr />
      <div className='container'>
        <Carousel>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?Enviornment"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>ENVIRONMENT AND HERITAGE SECTION</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?Heritage"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>ENVIRONMENT AND HERITAGE SECTION</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/featured?monuments"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>ENVIRONMENT AND HERITAGE SECTION</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    

      </div>





     





    


    </div>
</div>

    </SectionContainer>

</>
            )
}
export default Sections
