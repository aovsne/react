import React from 'react';
import './person.css';

const person = (props) => {
    return (
       <div className="Aadmi">
            <p onClick={props.click}>Hello, My name is {props.name}. And I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
       </div>
    );
}

export default person;