import React from 'react';
import '../App.css';
import '../app.scss';



function Parameter(props){
  return(
    <div id="parameters">
      <form>
        <input type="text" placeholder="mother's name" relation="mother" onChange={props.update}/>
        <input type="text" placeholder="father's name" relation="father" onChange={props.update}/>
        <input type="text" placeholder="your name" relation="child" onChange={props.update}/>
        <button onClick={props.press}>submit</button>
      </form>
    </div>
  )
};

export default Parameter;
