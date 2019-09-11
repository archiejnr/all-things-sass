import React from 'react';
import './App.css';
import './app.scss';
import Parameters from './components/parameters.js';
import Display from './components/display.js';
import nextId from 'react-id-generator';

//global variable


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tree:[{name:'archbold',father:'hama',mother:'Sithe',id:1},{name:'hama',father:'james',mother:'cecilia',id:2}],
      title:'Family tree'
    }
  }

appender=(e)=>{
      e.preventDefault();/*

      this.relationFinder();*/
      //console.log(d);
      let Father=document.querySelector('.baba').getAttribute('relation')==='father'?document.querySelector('.baba').value:null;
      let Mother=document.querySelector('.amai').getAttribute('relation')==='mother'?document.querySelector('.amai').value:null;
      let Child=document.querySelector('.mwana').getAttribute('relation')==='child'?document.querySelector('.mwana').value:null;
      let id=nextId();
      let newMember={
        name:Child,
        father:Father,
        mother:Mother,
        id:id
      }
      this.setState({
        tree:[...this.state.tree,...[newMember]]
      });

    document.querySelector('.baba').innerHTML=null;
    document.querySelector('.amai').innerHTML=null;
    document.querySelector('.mwana').innerHTML=null;
  }

handleChange=(e)=>{

}
//this finds the basic relationship between mother,father and daughter
relationFinder=()=>{
  let Child;
  let Father;
  let Mother;

  this.state.tree.forEach((father)=>{
    this.state.tree.forEach((child)=>{
      if (father.name===child.father)
      {
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
        Mother=mother.name;
        Child=child.name;
      }else
      console.log(Mother);
    })
  })
  console.log(`${Child} is the descendant of ${Father} and ${Mother}`);
  /*we are going to render the code to the screen from here*/
  /**/
  for(let x=0;x<this.state.tree.length-1;x++){
    let fatherObject;
    let childObject;
    if(Father){
       fatherObject=this.state.tree.filter((x)=>{return x.name===Father})[0];
       let div=document.createElement('div');
       div.innerHTML=Father;
       document.querySelector('#container').append(div);
       if(Child){
         childObject=this.state.tree.filter((x)=>{return x.name===Child})[0];
         document.querySelector('#container').firstChild.classList.add('bambo');
         document.querySelector('.bambo').append(document.createElement('div').innerHTML=Child);
       }
    }
  }
}
/*componentDidMount(){
  let d=document.createElement('div');
  d.innerHTML=`<div class="family">
                      <div class="row">
                        <div class="father">
                          ${this.state.tree[0].father}
                        </div>
                        <div class="mother">
                            ${this.state.tree[0].mother}
                        </div>
                      </div>
                      <div class="vl"></div>
                      <div class="row">
                          <div class="child">
                            ${this.state.tree[0].name}
                          </div>
                        </div>
                        <hr/>
                      </div>`;
  document.querySelector('#container').appendChild(d);
}*/
  render(){
    return(
      <div>
          <div id="left">
            <Parameters press={this.appender} update={this.handleChange} render={this.relationFinder}/>
          </div>
          <div id="right">
            <Display test={this.state.title}/>
          </div>
          <div id="bottom">

          </div>
      </div>)
  }
}
export default App;
