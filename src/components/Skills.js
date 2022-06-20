import React from 'react';
import './Skills.css';
const Skills = ({skills}) => {
    return (

        <ul className='skills'>
            <h3>Skills</h3>
            {skills.map((s,key) => 
                // <ol className='skill-list' >
                    <li className='skill' key={key}>{s}</li>
                // {/* </ol> */}
            )}
        </ul>
    );
}

export default Skills;
