import React from 'react'
import Top from './top/Top';
import Sections from './Sections'
import Counter from './Counter'
import AboutSection from './AboutSection';
import Testimonial from './Testimonial';
//import Developer from '../../components/footer/Developer';
const Home = () => {
    return (<>
        <div>

           <div><Top/></div>
            <div><AboutSection /></div>
             <div><Counter/></div>
            <div>
                <Sections />
            </div>
           
            <hr />
         <div><Testimonial/></div>
        </div>

    </>
    )
}

export default Home
