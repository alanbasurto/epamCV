import React from 'react';
import './Languages.css';
const Languages = ({languages}) => {
    return (
        <ul className='languages'>
            <h3>Languages</h3>
            {languages.map((l,key) => 
                // <ol className='skill-list' >
                    <li className='language' key={key}>{l}</li>
                // {/* </ol> */}
            )}
        </ul>
    );
}

export default Languages;
