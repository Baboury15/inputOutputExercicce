import React from 'react';
import './App.css';
import {Component} from 'react'
import UserInput from './Components/userInput'
import UserOutput from './Components/userOutput'


class  App extends Component  {


  state ={
    current: "enter your name",
    name : 'ibra'
  }

  currentHadler =(event)=>{

    this.setState({
      current: event.target.value
    })
  }

render(){

  
  return (
    <div className="App">
     <h1>React Exercice</h1>
     <UserInput current ={this.state.current} changed ={this.currentHadler}/>
     <UserOutput name = {this.state.name}/>

    </div>
  );
}
}

export default App;
