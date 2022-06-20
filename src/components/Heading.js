import React from 'react';
import './Heading.css';

const Heading = ({name,address,email,photo}) => {
    return (
        <div className='heading'>
            <div className='text'>
                <h1>{name}</h1>
                <h3>{email}</h3>
                <h3>{address}</h3>
            </div>
            <div className='image'>
                <img src={photo} alt='This is a Alan Basurto'/>
            </div>
        </div>
    );
}

export default Heading;
