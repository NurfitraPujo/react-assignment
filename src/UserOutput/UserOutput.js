import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Hello my name is {props.name}</p>
            <p>I'm good person</p>
        </div>
    )
}

export default UserOutput;