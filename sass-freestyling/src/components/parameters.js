import React from 'react';
import '../App.css';
import '../app.scss';



function Parameter(props){
  return(
    <div id="parameters">
      <form>
        <input className="amai" type="text" placeholder="mother's name" relation="mother" onChange={props.update} required/>
        <input className="baba" type="text" placeholder="father's name" relation="father" onChange={props.update} required/>
        <input className="mwana" type="text" placeholder="your name" relation="child" onChange={props.update} required/>
        <div className="radioButtons">
         <label htmlFor="male">male</label>
         <input className="radio" type="radio" name="gender" value="son" id="male"/>
         <label htmlFor="female">female</label>
         <input className="radio" type="radio" name="gender" value="daughter" id="female"/>
        </div>
        <button onClick={props.press}>submit</button>
      </form>
      <button onClick={props.render}>render</button>
    </div>
  )
};

export default Parameter;
