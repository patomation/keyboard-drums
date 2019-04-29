import React from "react";
import ReactDOM from "react-dom";

import style from "./sass/main.scss";

import Keyboard from './components/keyboard.js';

const Index = () => {
  return <div className='container'>
   <Keyboard />
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
