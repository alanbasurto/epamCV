import React from 'react';
import './Experience.css'
const Experience = ({experience}) => {
    return (
        <div className='experience'>
            <h3>Experience</h3>
            {experience.map((e,key) => 
                <div className='exp-item' key={key}>
                    <div className='company'>{e.company}</div>
                    <div className='description'>{e.description}</div>
                </div>
            )}
        </div>
    );
}

export default Experience;
