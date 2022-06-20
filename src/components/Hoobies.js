import React from 'react';
import './Hoobies.css';
const Hoobies = ({hoobies}) => {
    return (
        <ul className='hoobies'>
            <h3>Hoobies</h3>
            {hoobies.map((h,key) => 
                // <ol className='skill-list' >
                    <li className='hoobie' key={key}>{h}</li>
                // {/* </ol> */}
            )}
        </ul>
    );
}

export default Hoobies;
