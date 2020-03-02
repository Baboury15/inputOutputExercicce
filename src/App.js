import React from 'react';
import './App.css';
import {Component} from 'react'
import UserInput from './Components/userInput'
import UserOutput from './Components/userOutput'


class  App extends Component  {


  state ={
    name : 'enter name ',
    showText : false,
  }

  currentHadler =(event)=>{

    this.setState({
      current: event.target.value
    })
}

namechangeHandler =(event)=>{
  this.setState({
    name: event.target.value

  })
}

toggleTextHandler =()=>{
     
  const doeshowText = this.state.showText 

  this.setState({
    showText : ! doeshowText
  })
}


render(){

  
  
  return (
    <div className="App">
     <h1>React Exercice</h1>
     <UserInput current ={this.state.name} changed ={this.namechangeHandler} value ={this.state.name}/>
   


     <button onClick ={this.toggleTextHandler}>Show text </button>
     { this.state.showText ?

     <UserOutput name={this.state.name}/> : null
}

    </div>
  );
}
}

export default App;
