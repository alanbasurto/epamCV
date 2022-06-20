import React from 'react';
import './Education.css'
const Education = ({education}) => {
    return (
        <div className='education'>
            <h3>Education</h3>
            {education.map((e,key) => 
                <div className='edu-item' key={key}>
                    <div className='school'>{e.school}</div>
                    <div className='date'>{e.date}</div>
                </div>
            )}
        </div>
    );
}

export default Education;
