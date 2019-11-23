import player from './player.js'

// Utilities
import urlToAudioBuffer from './util/urlToAudioBuffer.js'

// Hooks
import useBlob from './hooks/useBlob.js'
// import useRecording from './hooks/useRecording.js'
import useVolume from './hooks/useVolume.js'

import sounds from './sounds.js'
import Sound from './Sound.js'

export default {
  // Storage management
  add: (key, url) => {
    console.log('ADD', key, url);
    if (url !== undefined) {
      urlToAudioBuffer(url)
        .then(buffer => {
          sounds[key] = new Sound(buffer) // Store
        })
    }
  },
  remove: (key) => {
    sounds[key] = null
  },
  copy: (source, target) => {
    sounds[target] = sounds[source]
  },
  swap: (source, target) => {
    const targetSound = sounds[target]
    sounds[target] = sounds[source]
    sounds[source] = targetSound
  },

  player,

  // HOOKS functionality
  useBlob,
  useVolume

}
