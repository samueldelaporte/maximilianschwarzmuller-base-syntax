import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
           <input type="text" onChange={props.handleChange} value={props.initValue}/> 
        </div>
    )
}

export default UserInput;