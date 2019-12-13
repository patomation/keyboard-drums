import React, {useEffect, useState} from "react";

import { Center, Button } from '@patomation/react-ui-components';
import Keyboard from '@patomation/react-keyboard/src'
import audioManager from './audioManager'
import sounds from './sounds'
import Controller from './components/Controller'
import config from './config'

//Set up sounds
Object.entries(config.keys).forEach(([key, item]) => {
  audioManager.add(key, item.sound)
})

const App = () => {

  const [ width, setWidth ] = useState()
  const [ height, setHeight ] = useState()

  const reportWindowSize = () => {
    setWidth(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))
    setHeight(Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
  }

  const isPortrait = height > width
  console.log('isPortrait', isPortrait)

  useEffect(() => {
    //Report initial size
    reportWindowSize()
    //Listen for window size changes
    window.addEventListener('resize', reportWindowSize);
    //Unmount
    return () => {
      window.removeEventListener('resize', reportWindowSize);
    }
  },[])

  return (
    <div
      className='app'
      style={{
        display: 'flex',
        flexFlow: 'column',
        height: '100%',
      }}>

        <h2
          style={{
            fontSize: '1rem',
            textAlign: 'center',
            // display: 'flex',
            flex: '1 0 auto',
            flexGrow: '0',
            flexShrink: '1',
            flexBasis: 'auto',
          }}>{
            "K E Y B O A R D D R U M S"
          }</h2>

        <Controller
          locked={true}
          mode={ isPortrait ? '32portrait' : 'keyboard' }
          style={{
            flex: '1 1 auto',
            height: 'auto'
          }}
          onDown={(id, key) => {
            console.log('down', id, key);
            audioManager.player.stop(key)
          }}
          onDown={(id, key) => {
            console.log('up', id, key);
            audioManager.player.play(key, {
              voiceOverlap: false,
              start: 0 })
          }}
          names={[
            'chord',
            'chord',
            'chord',
            'chord',
            'chord',
            'chord',
            'chord',
          ]}
          colors={[
            '#321325',
            '#5f0f40',
            '#9a031e',
            '#cb793a',
            '#fcdc4d'
          ]}
          />

    </div>
  );
}
export default App;
