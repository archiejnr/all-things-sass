import React from 'react';
import './App.css';
import './app.scss';
import Parameters from './components/parameters.js';
import Display from './components/display.js';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      dako:"yes sirrr"
    }
  }
  render(){
    return(
      <div>
          <div id="left">
            <Parameters />
          </div>
          <div id="right">
            <Display />
          </div>
      </div>)
  }
}
export default App;
