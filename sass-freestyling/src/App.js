import React from 'react';
import './App.css';
import './app.scss';
import Parameters from './components/parameters.js';
import Display from './components/display.js';

//global variable


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tree:[],
      title:'Family tree'
    }
  }

appender=(e)=>{
      e.preventDefault();/*
      let d=document.createElement('div');
      d.innerHTML=`<div class="family"><div class="row"><div class="father">${this.state.tree[0].father}</div><div class="mother">${this.state.tree[0].mother}</div></div><div class="row"><div class="child">${this.state.tree[0].child}</div></div></div>`;
      document.querySelector('#container').appendChild(d);
      this.relationFinder();*/
      //console.log(d);
      let Father=document.querySelector('.baba').getAttribute('relation')==='father'?document.querySelector('.baba').value:null;
      let Mother=document.querySelector('.amai').getAttribute('relation')==='mother'?document.querySelector('.amai').value:null;
      let Child=document.querySelector('.mwana').getAttribute('relation')==='child'?document.querySelector('.mwana').value:null;

      let newMember={
        name:Child,
        father:Father,
        mother:Mother
      }
      this.setState({
        tree:[...this.state.tree,...[newMember]]
      });
  }

handleChange=(e)=>{

}
//this finds the basic relationship between mother,father and daughter
relationFinder=()=>{
  let Child=null;
  let Father=null;
  let Mother=null;

  this.state.tree.forEach((father)=>{
    this.state.tree.forEach((child)=>{
      if (father.name===child.father)
      {
        console.log(`${child.name} is the ${child.gender} of ${father.name}`);
        Father=father.name;
        Child=child.name;
      }else {
        console.log(Father);
      }
    })
  })
  this.state.tree.forEach((mother)=>{
    this.state.tree.forEach((child)=>{
      if (mother.name===child.mother){
        console.log(`${child.name} is the ${child.gender} of ${mother.name}`);
        Mother=mother.name;
        Child=child.name;
      }else
      console.log(Mother);
    })
  })
  console.log(Child);
  console.log(`${Father} is ${Mother}'s husband`)
}
  render(){
    return(
      <div>
          <div id="left">
            <Parameters press={this.appender} update={this.handleChange} render={this.relationFinder}/>
          </div>
          <div id="right">
            <Display test={this.state.title}/>
          </div>
      </div>)
  }
}
export default App;
