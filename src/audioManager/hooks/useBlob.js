import { useState } from 'react'
import audioBufferToBlob from '../util/audioBufferToBlob.js'
import sounds from '../sounds.js'

export default () => {
  const [blob, setBlob] = useState()
  return [
    blob,
    (id) => {
      if (sounds[id]) {
        setBlob(audioBufferToBlob(sounds[id].buffer))
      }
    }
  ]
}
