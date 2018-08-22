import React, { Component } from 'react';
import './App.css';
import Ningen from './Person/Person';
import Lungpa from './Country/country';

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
      
    ],
    showPersons: true,
    Lungpa: [
      {
        lungName: 'Tibet',
        Continent: 'Asia',
        id: 'ave'
      },
      {
        lungName: 'America',
        Continent: 'North America',
        id: 'avs'
      },
      {
        lungName: 'India',
        Continent: 'Asia',
        id: 'avw'
      },
      {
        lungName: 'Swiss',
        Continent: 'Europe',
        id: 'avc'
      },
    ],
    showConti : false,
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

  countryChange = (event, id) => {
    const kuniIndex = this.state.Lungpa.findIndex( l => {
      return l.id === id;
    })

    const kuni  = {
      ...this.state.Lungpa[kuniIndex]
    };

    kuni.lungName = event.target.value;

    const Lungpa = [...this.state.Lungpa];
    Lungpa[kuniIndex] = kuni

   this.setState({
    Lungpa: Lungpa 
   })
  }

  nameToggle = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons : !doesShow
    })
  }

  switchCountry = (newCon) => { 
    this.setState({
      Lungpa: [
        {
          lungName: 'Japan',
          Continent: 'Asia'
        },
        {
          lungName: newCon,
          Continent: 'North America'
        },
        {
          lungName: 'Thailand',
          Continent: 'Asia'
        },
        {
          lungName: 'Swiss',
          Continent: 'Europe'
        },
      ]
    })
  }

  deletecountry = (countryIndex) => {
    // using a spread operator copying the array into new list array.
    const Lungpa = [...this.state.Lungpa]
    Lungpa.splice(countryIndex, 1)
    this.setState({Lungpa : Lungpa})
  }

  nextToggle = () => {
    const dontShow = this.state.showConti
    this.setState({
      showConti : !dontShow
    })
  }
 
  render() {
    const style = {
      padding: '16px',
      border: '1px solid #ccc',
      font: 'inherit',
      backgroundColor: '#eee',
      cursor: 'pointer',
      margin: '20px'
    }

    // handling dynamic content
    let desh = null

      if(this.state.showConti === true){
        desh = (
          <div>
            {this.state.Lungpa.map((kuni, index) => {
              return <Lungpa name = {kuni.lungName}
                             conti = {kuni.Continent}
                             click={() => this.deletecountry(index)}
                             key={kuni.id}
                             change={(event) => this.countryChange(event, kuni.id)}
                      /> 
            })}

            {/* following has been shortenend by using map function on the above. */}
            {/* <Lungpa name = {this.state.Lungpa[0].lungName}
                    conti = {this.state.Lungpa[0].Continent}
            />
            <Lungpa name = {this.state.Lungpa[1].lungName}
                    conti = {this.state.Lungpa[1].Continent}
                    click = {this.switchCountry.bind(this,'Mongol')}
            />
            <Lungpa name = {this.state.Lungpa[2].lungName}
                    conti = {this.state.Lungpa[2].Continent}
            />
            <Lungpa name = {this.state.Lungpa[3].lungName}
                    conti = {this.state.Lungpa[3].Continent}
            /> */}
        </div>
        )
      }


    return (
      <div className="App">
        <h1>Hello This is my new App.</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('TashiEllis')}>Switch Names
        </button>
        <button style={style} onClick={this.nameToggle}>Toggle</button>
        <button style={style} onClick={this.nextToggle}>Toggle next</button>
        { this.state.showPersons === true ?
        <div>
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
        </div>: null
        }
        { desh }
      </div>
      
    );
    // return (React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hello who is this?')));
  }
}

export default App;
