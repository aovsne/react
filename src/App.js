import React, { Component } from 'react';
import './App.css';
import Ningen from './Person/Person'

class App extends Component {
  state = {
    Persons:[
      {
        name: 'Tenzin',
        age:30
      },
      {
        name: 'Tash',
        age:33
      },
      {
        name: 'Tom',
        age:32
      },
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!')
    this.setState({
      Persons:[
        {
          name: newName,
          age: 33
        },
        {
          name: 'Topjor',
          age: 33
        },
        {
          name: 'dhundup',
          age: 32
        },
      ]
    })
  }
  eventChange = (event) => {
    this.setState({
      Persons:[
        {
          name: 'Kuku',
          age: 33
        },
        {
          name: event.target.value,
          age: 33
        },
        {
          name: 'dhundup',
          age: 32
        },
      ]
    })
  }

  render() {
    const style = {
      padding: '16px',
      border: '1px solid #ccc',
      font: 'inherit',
      backgroundColor: '#eee',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello This is my new App.</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('TashiEllis')}>Switch Names
        </button>
        <Ningen 
          name={this.state.Persons[0].name} 
          age={this.state.Persons[0].age} />
        <Ningen 
          name={this.state.Persons[1].name} 
          age={this.state.Persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Dhuktso!')} 
          change={this.eventChange}>My hobbies: coding </Ningen>
        <Ningen 
          name={this.state.Persons[2].name} 
          age={this.state.Persons[2].age}/>
      </div>
      
    );
    // return (React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hello who is this?')));
  }
}

export default App;
