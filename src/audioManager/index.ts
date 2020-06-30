import player from './player'

// Utilities
import urlToAudioBuffer from './util/urlToAudioBuffer'

// Hooks
import useBlob from './hooks/useBlob'
// import useRecording from './hooks/useRecording.js'
import useVolume from './hooks/useVolume'

import sounds from './sounds'
import Sound from './Sound'

export default {
  // Storage management
  add: (key: string, url: string): void => {
    if (url !== undefined) {
      urlToAudioBuffer(url)
        .then((buffer: AudioBuffer) => {
          sounds[key] = new Sound(buffer) // Store
        })
    }
  },
  remove: (key: string): void => {
    sounds[key] = null
  },
  copy: (source: string, target: string): void => {
    sounds[target] = sounds[source]
  },
  swap: (source: string, target: string): void => {
    const targetSound = sounds[target]
    sounds[target] = sounds[source]
    sounds[source] = targetSound
  },

  player,

  // HOOKS functionality
  useBlob,
  useVolume

}
