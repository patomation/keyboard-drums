import { useState } from 'react'
import player from '../player.js'

export default (value) => {
  const [volume, setVolume] = useState(value || 1)
  return [
    volume,
    (value) => {
      setVolume(value)
      player.volume(value)
    }
  ]
}
