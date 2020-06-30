import React, {useEffect, useState} from "react";

import { Center, Button } from '@patomation/react-ui-components';
import audioManager from './audioManager'
import sounds from './sounds'
import Controller from './components/Controller'
import config from './config'


let names = [], colors = []
//Set up sounds
Object.entries(config.keys).forEach(([key, item]) => {
  audioManager.add(key, item.sound)
  names.push(item.name)
  colors.push(item.color)
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
      className='app'>
        <Center
          // disabled={isPortrait}
          style={{
            height: '100%'
          }}
          contentStyle={{
            ...(isPortrait ? {
              height: '100%',
            }: null),
            display: 'flex',
            flexFlow: 'column',
            ...( !isPortrait ? {
              maxWidth: '800px',
              // margin: '0 auto',
              // maxHeight: '500px'
              height: '400px'
            } : null ),
          }}>

          <h2
            style={{
              fontSize: isPortrait ? '1rem' : '2rem',
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
              height: 'auto',
            }}
            onUp={(id, key) => {
              console.log('up', id, key);
              audioManager.player.stop(key)
            }}
            onDown={(id, key) => {
              console.log('down', id, key);
              audioManager.player.play(key, {
                voiceOverlap: false,
                start: 0 })
            }}
            keys={config.keys}
            />
        </Center>

    </div>
  );
}
export default App;
