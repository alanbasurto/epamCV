import React from 'react';
import './About.css'
const About = ({about}) => {
    return (
        <div className='about'>
            <h3>About</h3>
            <p>{about}</p>
        </div>
    );
}

export default About;
