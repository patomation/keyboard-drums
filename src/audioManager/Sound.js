// Sound storage item
export default class Sound {
  constructor (buffer) {
    this.buffer = buffer
    this.gainNode = null
    this.gainNodes = []
  }
}
