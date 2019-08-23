import React from "react";

import { Keyboard, Grid } from 'react-ui-components';

import audioPlayers from './audioPlayers.js';


const App = () => {
  return (
    <div className='app'>

        <h2  style={{textAlign: 'center'}}>{"K E Y B O A R D D R U M S"}</h2>

      <Keyboard
        onDown={ key => {
          console.log('key down', key);
          if(audioPlayers[key]) audioPlayers[key].play()
        }}
        onUp={ key => {
          console.log('key up', key);
          if(audioPlayers[key]) audioPlayers[key].pause()
        }}
        buttonStyle={{
          color: '#49393b',
          background: '#89a894'
        }}
        hoverStyle={{
          background: '#4b644a'
        }}
        activeStyle={{
          color: '#49393b',
          background: '#adfcf9'
        }}
        disabledStyle={{
          background: '#4b644a'
        }}
         />

    </div>
  );
}
export default App;
