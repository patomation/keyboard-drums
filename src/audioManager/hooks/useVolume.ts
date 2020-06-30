import { useState } from 'react'
import player from '../player'

export default (initialValue: number): [number, (value: number) => void] => {
  const [volume, setVolume] = useState(() => {
    if (initialValue) {
      player.volume(initialValue) // Make sure initial value is the same as player.volume
    }
    return initialValue || 1
  })
  return [
    volume,
    (value: number): void => {
      player.volume(value)
      setVolume(value)
    }
  ]
}
