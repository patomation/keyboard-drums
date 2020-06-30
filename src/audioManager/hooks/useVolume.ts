import { useState } from 'react'
import player from '../player'

export default (value: number): [number, (value: number) => void] => {
  const [volume, setVolume] = useState(value || 1)
  return [
    volume,
    (value: number): void => {
      setVolume(value)
      player.volume(value)
    }
  ]
}
