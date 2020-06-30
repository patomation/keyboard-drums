import * as React from 'react'
import { useEffect, useState, ReactElement } from 'react'

import { Center, Range } from '@patomation/ui'
import audioManager from './audioManager'
import useVolume from './audioManager/hooks/useVolume'
import Controller from './components/Controller'
import config from './config'

const names = []; const colors = []

// Set up sounds
Object.entries(config.keys).forEach(([key, { sound, name, color }]) => {
  audioManager.add(key, sound)
  names.push(name)
  colors.push(color)
})

export default function App (): ReactElement {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [volume, setVolume] = useVolume(0.35)

  const reportWindowSize = () => {
    setWidth(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))
    setHeight(Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
  }

  const isPortrait = height > width

  useEffect(() => {
    // Report initial size
    reportWindowSize()
    // Listen for window size changes
    window.addEventListener('resize', reportWindowSize)
    // Un mount
    return () => {
      window.removeEventListener('resize', reportWindowSize)
    }
  }, [])

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
            height: '100%'
          } : null),
          display: 'flex',
          flexFlow: 'column',
          ...(!isPortrait ? {
            maxWidth: '800px',
            // margin: '0 auto',
            // maxHeight: '500px'
            height: '400px'
          } : null)
        }}>
        <div style={{
          // display: 'flex'
        }}>
          <h2
            style={{
              fontSize: isPortrait ? '1rem' : '2rem',
              textAlign: 'center',
              // display: 'flex',
              flex: '1 0 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto'
            }}>{
              'K E Y B O A R D D R U M S'
            }
          </h2>
          <div style={{
            // width: '100%'
            overflow: 'hidden'
          }}>
            <span>Volume</span>
            <Range
              thumbColor='#49393b'
              background='#341c1c'
              style={{
                margin: '0 auto'
              }}
              value={volume * 100}
              min={0}
              max={100}
              onChange={(e) => {
                // setVolume(e.target.value)
                console.log(parseInt((e.target as HTMLTextAreaElement).value) / 100)

                setVolume(parseInt((e.target as HTMLTextAreaElement).value) / 100)
              }}
            />
          </div>
        </div>
        <Controller
          locked={true}
          mode={ isPortrait ? '32portrait' : 'keyboard' }
          style={{
            flex: '1 1 auto',
            height: 'auto'
          }}
          onUp={(id, key) => {
            audioManager.player.stop(key)
          }}
          onDown={(id, key) => {
            audioManager.player.play(key)
          }}
          keys={config.keys}
        />
      </Center>

    </div>
  )
}
