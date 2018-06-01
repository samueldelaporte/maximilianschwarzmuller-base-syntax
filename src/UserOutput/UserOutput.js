import React from 'react';

const UserOutput = (props) => {
    const style = {
        textAlign: 'center',
        fontSize: '16px'
    }

    return (
        <div style={style}>
            <p>{props.username}</p>
            <p>Not sure what to put in there</p>
        </div>
    )
}

export default UserOutput;