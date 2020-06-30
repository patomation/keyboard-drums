import context from './util/context'
import sounds from './sounds'
// import { loadPartialConfig } from '@babel/core'

// MASTER FX
const master = context.createGain()
// TODO create other effect nodes

// CONNECT NODES
master.connect(context.destination) // Conects gain node to output
// TODO connect additional gain nodes

const createSource = (buffer) => {
  const source = context.createBufferSource()
  source.buffer = buffer
  return source
}

const fadeOut = (gainNode, time = 1) => {
  gainNode.gain.cancelScheduledValues(context.currentTime) // May not need but what the hell
  gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + time)
  // gainNode.gain.linearRampToValueAtTime(0.0001, context.currentTime + time)
}

const fadeAll = (key, time) => {
  // NoteOn false
  if (sounds[key].gainNodes) {
    // Stop each gain node. By fading it out.
    sounds[key].gainNodes.forEach((gainNode) => {
      // Fade out gracefully
      fadeOut(gainNode, time)
    })
    // Reset gainNode cache
    sounds[key].gainNodes = []
  }
}

export default {
  play: (key: string): void => {
    const voiceOverlap = false
    const start = 0
    const end = null
    if (sounds[key]) {
      // Crete new source
      const source = createSource(sounds[key].buffer)
      source.currentTime = 0.5
      // VoiceOverlap false
      if (!voiceOverlap) {
        fadeAll(key, 0.2)
      }
      // Make new gain node
      const gainNode = context.createGain()

      // Make a storage space if one does not exist
      if (!sounds[key].gainNodes) sounds[key].gainNodes = []
      // Store each gain node created to stop them later
      sounds[key].gainNodes.push(gainNode)

      // Connect sound to output
      source.connect(gainNode)
      gainNode.connect(master)

      // Start playing
      source.start(0, start || 0)
      // Schedule stop id end time defined
      setTimeout(() => {
        fadeOut(gainNode, 0.2)
      }, (end || sounds[key].buffer.duration) * 1000) // Convert sec to milSec
    }
  },

  stop: (key: string): void => {
    // NoteOn false
    if (sounds[key]) {
      fadeAll(key, 0.5)
    }
  },

  volume: (value: number): void => {
    master.gain.value = value
  }

}
