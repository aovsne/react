import React from 'react';
import './country.css';

const lungpa = (props) => {
    return(
        <div>
            <p onClick={props.click}>This is {props.name} and it belongs to the continent {props.conti}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
}

export default lungpa;