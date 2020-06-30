// Sound storage item
export default class Sound {
  constructor (buffer: AudioBuffer) {
    this.buffer = buffer
    this.gainNode = null
    this.gainNodes = []
  }

  buffer: AudioBuffer
  gainNode: AudioNode
  gainNodes: AudioNode[]
}
