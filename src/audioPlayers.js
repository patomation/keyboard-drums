import sounds from './sounds';

class AudioPlayer {
  constructor(audioSource) {
    this.audioSource = audioSource;
    this.audio = new Audio(this.audioSource);
  }

  play() {
    // Lets me rappid fire play the samples
    this.audio.pause();
    this.audio.currentTime = 0;
    // Play from start
    this.makePromise(this.audio.play());
  }

  pause() {
    this.audio.pause();
  }

  makePromise(promise) {
    // Promise expected by google chrome audio policy -Pat
    if (promise !== undefined && promise !== false) {
      promise
        .then(_ => {
          // Autoplay started!
        })
        .catch(error => {
          // Error
          console.log('error');
        });
    }
  }
}

export default {
  '1': new AudioPlayer(sounds.chord1),
  '2': new AudioPlayer(sounds.chord2),
  '3': new AudioPlayer(sounds.chord3),
  '4': new AudioPlayer(sounds.chord4),
  '5': new AudioPlayer(sounds.chord5),
  '6': new AudioPlayer(sounds.chord6),
  '7': new AudioPlayer(sounds.vocal7),
  '8': new AudioPlayer(sounds.vocal8),
  '9': new AudioPlayer(sounds.vocal9),
  '0': new AudioPlayer(sounds.vocal10),
  '-': new AudioPlayer(sounds.vocal11),
  '=': new AudioPlayer(sounds.vocal12),

  q: new AudioPlayer(sounds.various1),
  w: new AudioPlayer(sounds.various2),
  e: new AudioPlayer(sounds.various3),
  r: new AudioPlayer(sounds.various4),
  t: new AudioPlayer(sounds.various5),
  y: new AudioPlayer(sounds.various6),
  u: new AudioPlayer(sounds.various7),
  i: new AudioPlayer(sounds.various8),
  o: new AudioPlayer(sounds.various9),
  p: new AudioPlayer(sounds.various10),
  '[': new AudioPlayer(sounds.various11),
  ']': new AudioPlayer(sounds.various12),

  a: new AudioPlayer(sounds.vox1),
  s: new AudioPlayer(sounds.vox2),
  d: new AudioPlayer(sounds.hat1),
  f: new AudioPlayer(sounds.hat2),
  g: new AudioPlayer(sounds.vox3),
  h: new AudioPlayer(sounds.vox4),
  j: new AudioPlayer(sounds.hat3),
  k: new AudioPlayer(sounds.hat4),
  l: new AudioPlayer(sounds.vox5),
  ';': new AudioPlayer(sounds.vox6),

  z: new AudioPlayer(sounds.kick1),
  x: new AudioPlayer(sounds.kick2),
  c: new AudioPlayer(sounds.snare1),
  v: new AudioPlayer(sounds.snare2),
  b: new AudioPlayer(sounds.kick3),
  n: new AudioPlayer(sounds.kick4),
  m: new AudioPlayer(sounds.snare3),
  ',': new AudioPlayer(sounds.snare4),
  '.': new AudioPlayer(sounds.various2),
};
