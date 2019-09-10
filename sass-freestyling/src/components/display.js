import React from 'react';
import '../App.css';
import '../app.scss';

function Display(props){
  return(
    <div id="display">
      <span id="app_title">{props.test}</span>
      <div id="container">
      </div>
    </div>
  )
}

export default Display;
