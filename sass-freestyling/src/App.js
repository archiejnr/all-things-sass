import React from 'react';
import './App.css';
import './app.scss';
import Parameters from './components/parameters.js';
import Display from './components/display.js';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tree:[{title:"My Family Tree",
      father:'',
      mother:'',
      child:''}]
    }
  }

appender=(e)=>{
      e.preventDefault();
      let d=document.createElement('div');
      d.innerHTML=`<div class="family"><div class="row"><div class="father">${this.state.tree[0].father}</div><div class="mother">${this.state.tree[0].mother}</div></div><div class="row"><div class="child">${this.state.tree[0].child}</div></div></div>`;
      document.querySelector('#container').appendChild(d);
      //console.log(d);
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
            <Display test={this.state.tree[0].title}/>
          </div>
      </div>)
  }
}
export default App;
