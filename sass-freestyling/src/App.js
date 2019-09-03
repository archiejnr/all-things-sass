import React from 'react';
import './App.css';
import './app.scss';
import Parameters from './components/parameters.js';
import Display from './components/display.js';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title:"Family Tree",
      father:'',
      mother:'',
      child:''
    }
    this.appender=this.appender.bind(this)
  }

appender=(e)=>{
      e.preventDefault();
  }
handleChange=(e)=>{
    e.target.getAttribute('relation')==='father' ? this.setState({father:e.target.value}):e.target.getAttribute('relation')==='mother' ? this.setState({mother:e.target.value}):this.setState({child:e.target.value});
}
  render(){
    return(
      <div>
          <div id="left">
            <Parameters press={this.appender} update={this.handleChange}/>
          </div>
          <div id="right">
            <Display test={this.state.title}/>
          </div>
      </div>)
  }
}
export default App;
