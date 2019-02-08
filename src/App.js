import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import {Router, Route} from "react-router";

class App extends Component {
  state = {
     person: [
       {name: "Max", age: 25},
       {name: "Shah", age: 22},
       {name: "Clara", age: 26}
     ]
  }

  nameChangeHandler = (event) => {
    this.setState({person: [
        {name: "Max", age: 25},
        {name: event.target.value, age: 22},
        {name: "Clara", age: 26}
      ]
    })
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    this.setState({person: [
        {name: newName, age: 25},
        {name: "Shah", age: 22},
        {name: "Clara", age: 26}
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi! I am a React Developer</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("Maximilian!!")}>Switch Name</button>
        <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}/>
        <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age}/>


      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Now I\'m a h1 Tag'));
  }
}

export default App;
