import React from 'react';
import './App.css';
import './app.scss';
import Parameters from './components/parameters.js';
import Display from './components/display.js';

//global variable
  let newArray;


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tree:[{name:'Anna',father:'Mdara Hwamz',mother:'Mainini',gender:'daughter'},{name:'Mainini',father:'Sekuru',mother:'Mbuya',gender:'daughter'},{name:'Mdara Hwamz',father:'kule',mother:'gogaz',gender:'son'}],
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

      console.log(newArray);
  }

handleChange=(e)=>{
  let Father=e.target.getAttribute('relation')==='father'?e.target.value:null;
  let Mother=e.target.getAttribute('relation')==='mother'?e.target.value:null;
  let Child=e.target.getAttribute('relation')==='child'?e.target.value:null;

  let newMember={
    name:Child,
    father:Father,
    mother:Mother
  }

  newArray=[newMember];
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
  console.log(Child)
  console.log(`${Father} is ${Mother}'s husband`)
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
