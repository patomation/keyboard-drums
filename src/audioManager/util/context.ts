
declare global {
  interface Window {
    webkitAudioContext
  }
}

// export default context
export default new (window.AudioContext || window.webkitAudioContext)()
