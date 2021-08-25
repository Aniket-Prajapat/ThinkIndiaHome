import React from 'react'
//import './counter.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components'

const CounterContainer = styled.div`
.box{

	margin: 1% 1%  2% 2% ;
	overflow: auto;
}
.counters {
	
	margin-left: 2%;
	margin-right: 2%;
	background: #0f479a;
	color: #fff;
	padding: 4px 2px;
	border-top: 3px lightskyblue solid;
	display:grid;
}
.counters .box {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 12px;
	text-align: center;
}
.counters i {
	color: lightskyblue;
	margin-bottom: 5px;
}

.counters .counter {
	font-size: 35px;
	margin: 10px 10px;
}

@media (max-width: 768px) {
	.counters .box {
		grid-template-columns: repeat(2, 1fr);

	}

	.counters .box> div:nth-of-type(1),
	.counters .box> div:nth-of-type(2) {
		border-bottom: 1px lightskyblue solid;
		padding-bottom: 2px;
	}
	.counters{
		grid:4;
		padding: -300px;
		font-size: 15px;
	}
}

`;


const Counter = () => {
	const counters = document.querySelectorAll('.counter');

	const speed = 200; // The lower the slower

	counters.forEach(counter => {
		const updateCount = () => {
			const target = +counter.getAttribute('data-target');
			const count = +counter.innerText;

			// Lower inc to slow and higher to slow
			const inc = target / speed;

			// console.log(inc);
			// console.log(count);

			// Check if target is reached
			if (count < target) {
				// Add inc to count and output in counter
				counter.innerText = count + inc;
				// Call function every ms
				setTimeout(updateCount, 1);
			} else {
				counter.innerText = target;
			}
		};

		updateCount();
	});
	return (
		<CounterContainer>


			<section className="counters">
				<div className="box">
					<div>


						<div className="counter" data-target="60000">58880</div>
						<FontAwesomeIcon icon={faYoutube} size="2x" />
						<h3>Subscribers</h3>
					</div>
					<div>

						<div className="counter" data-target="15000">74570</div>
						<FontAwesomeIcon icon={faInstagram} size="2x" />
						<h3>Followers</h3>
					</div>
					<div>

						<div className="counter" data-target="15000">5450</div>

						<FontAwesomeIcon icon={faFacebook} size="2x" />
						<h3>Likes</h3>
					</div>
					<div>


						<div className="counter" data-target="9000">43460</div>


						<h3>Active <br />Members</h3>
					</div>

				</div>
			</section>
			<hr />
		</CounterContainer>
	)
}

export default Counter
