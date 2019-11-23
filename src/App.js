import React from "react";

import { Center } from '@patomation/react-ui-components';
import Keyboard from '@patomation/react-keyboard'
import audioManager from './audioManager'
import sounds from './sounds'

audioManager.add('1', sounds.chord1)
audioManager.add('2', sounds.chord2)
audioManager.add('3', sounds.chord3)
audioManager.add('4', sounds.chord4)
audioManager.add('5', sounds.chord5)
audioManager.add('6', sounds.chord6)
audioManager.add('7', sounds.vocal7)
audioManager.add('8', sounds.vocal8)
audioManager.add('9', sounds.vocal9)
audioManager.add('0', sounds.vocal10)
audioManager.add('-', sounds.vocal11)
audioManager.add('=', sounds.vocal12)
audioManager.add('q', sounds.various1)
audioManager.add('w', sounds.various2)
audioManager.add('e', sounds.various3)
audioManager.add('r', sounds.various4)
audioManager.add('t', sounds.various5)
audioManager.add('y', sounds.various6)
audioManager.add('u', sounds.various7)
audioManager.add('i', sounds.various8)
audioManager.add('o', sounds.various9)
audioManager.add('p', sounds.various10)
audioManager.add('[', sounds.various11)
audioManager.add(']', sounds.various12)
audioManager.add('a', sounds.vox2)
audioManager.add('s', sounds.hat1)
audioManager.add('d', sounds.hat2)
audioManager.add('f', sounds.vox1)
audioManager.add('g', sounds.vox3)
audioManager.add('h', sounds.vox4)
audioManager.add('j', sounds.hat3)
audioManager.add('k', sounds.hat4)
audioManager.add('l', sounds.vox5)
audioManager.add(';', sounds.vox6)
audioManager.add('z', sounds.kick1)
audioManager.add('x', sounds.kick2)
audioManager.add('c', sounds.snare1)
audioManager.add('v', sounds.snare2)
audioManager.add('b', sounds.kick3)
audioManager.add('n', sounds.kick4)
audioManager.add('m', sounds.snare3)
audioManager.add(',', sounds.snare4)
audioManager.add('.', sounds.various2)

const App = () => {
  return (
    <div className='app'>

      <Center>
        <h2  style={{textAlign: 'center'}}>{"K E Y B O A R D D R U M S"}</h2>

        <Keyboard
          style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}
          onDown={ key => {
            console.log('key down', key);
            audioManager.player.play(key, {
              voiceOverlap: false,
              start: 0 })
          }}
          onUp={ key => {
            console.log('key up', key);
            audioManager.player.stop(key)
          }}
          buttonStyle={{
            color: '#49393b',
            background: '#89a894'
          }}
          activeStyle={{
            color: '#49393b',
            background: '#adfcf9'
          }}
          disabledStyle={{
            background: '#4b644a'
          }}
           />
        </Center>
    </div>
  );
}
export default App;
