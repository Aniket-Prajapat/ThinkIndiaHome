import React from 'react'
import Particles from 'react-particles-js';
import ParticleConfig from './ParticleConfig';
import Text from './Text'
import styled from 'styled-components'

const BgContainer = styled.div`
background-color: white;
position: relative;


.text {
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  margin-left: -5%;
  color: blue;
}
.particles{
  height: auto;
}
@media screen and (max-width: 768px) {
  .text {
    margin-top: -20%;
  }

  .particles{
    height: 400px;
  }
}

`;


const Bg = () => {
	return (
        <BgContainer>

			<div className="particles"><Particles params={ParticleConfig} />

					<div className="text"><Text /></div>
				</div>
			

		</BgContainer>
	)
}

export default Bg
