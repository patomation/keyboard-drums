import { useState } from 'react'
import audioBufferToBlob from '../util/audioBufferToBlob'
import sounds from '../sounds'

const useBlob = (): [Blob, (id: number) => void] => {
  const [blob, setBlob] = useState<Blob>()
  return [
    blob,
    (id) => {
      if (sounds[id]) {
        setBlob(audioBufferToBlob(sounds[id].buffer))
      }
    }
  ]
}

export default useBlob
