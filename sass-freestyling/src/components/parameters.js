import React from 'react';
import '../App.css';
import '../app.scss';



function Parameter(props){
  return(
    <div id="parameters">
      <form>
        <input type="text" placeholder="mother's name"/>
        <input type="text" placeholder="father's name"/>
        <input type="text" placeholder="your name"/>
        <button>submit</button>
      </form>
    </div>
  )
};

export default Parameter;
