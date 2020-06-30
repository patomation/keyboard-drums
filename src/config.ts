import sounds from './sounds'

const palette = {
  yellow: '#b58900', // Yellow
  orange: '#cb4b16', // Orange
  red: '#dc322f', // Red
  magenta: '#d33682', // Magenta
  violet: '#6c71c4', // Violet
  blue: '#268bd2', // Blue
  cyan: '#2aa198', // Cyan
  green: '#859900' // Green
}

export interface Key {
  name: string
  color: string
  sound: string
}

export interface Keys {
  [key: string]: Key
}

export default {
  keys: {
    1: {
      name: 'chord',
      color: palette.violet,
      sound: sounds.chord1
    },
    2: {
      name: 'chord',
      color: palette.violet,
      sound: sounds.chord2
    },
    3: {
      name: 'chord',
      color: palette.violet,
      sound: sounds.chord3
    },
    4: {
      name: 'chord',
      color: palette.violet,
      sound: sounds.chord4
    },
    5: {
      name: 'chord',
      color: palette.violet,
      sound: sounds.chord5
    },
    6: {
      name: 'chord',
      color: palette.violet,
      sound: sounds.chord6
    },
    7: {
      name: 'vocal',
      color: palette.magenta,
      sound: sounds.vocal7
    },
    8: {
      name: 'vocal',
      color: palette.magenta,
      sound: sounds.vocal8
    },
    9: {
      name: 'vocal',
      color: palette.magenta,
      sound: sounds.vocal9
    },
    0: {
      name: 'vocal',
      color: palette.magenta,
      sound: sounds.vocal10
    },
    '-': {
      name: 'vocal',
      color: palette.magenta,
      sound: sounds.vocal11
    },
    '=': {
      name: 'vocal',
      color: palette.magenta,
      sound: sounds.vocal12
    },
    q: {
      name: 'fx',
      color: palette.cyan,
      sound: sounds.various1
    },
    w: {
      name: 'chime',
      color: palette.blue,
      sound: sounds.various2
    },
    e: {
      name: 'synth hit',
      color: palette.red,
      sound: sounds.various3
    },
    r: {
      name: 'trumpet fx',
      color: palette.cyan,
      sound: sounds.various4
    },
    t: {
      name: 'hit',
      color: palette.yellow,
      sound: sounds.various5
    },
    y: {
      name: 'scratch',
      color: palette.violet,
      sound: sounds.various6
    },
    u: {
      name: 'AAAHHhhhhh',
      color: palette.red,
      sound: sounds.various7
    },
    i: {
      name: 'trumpet hit',
      color: palette.blue,
      sound: sounds.various8
    },
    o: {
      name: 'sound',
      color: palette.green,
      sound: sounds.various9
    },
    p: {
      name: 'sound',
      color: palette.green,
      sound: sounds.various10
    },
    '[': {
      name: 'sound',
      color: palette.green,
      sound: sounds.various11
    },
    ']': {
      name: 'sound',
      color: palette.green,
      sound: sounds.various12
    },
    a: {
      name: 'deposit',
      color: palette.violet,
      sound: sounds.vox2
    },
    s: {
      name: 'hat',
      color: palette.green,
      sound: sounds.hat1
    },
    d: {
      name: 'hat',
      color: palette.green,
      sound: sounds.hat2
    },
    f: {
      name: 'rise fx',
      color: palette.red,
      sound: sounds.vox1
    },
    g: {
      name: 'uhhh',
      color: palette.magenta,
      sound: sounds.vox3
    },
    h: {
      name: '1credit',
      color: palette.violet,
      sound: sounds.vox4
    },
    j: {
      name: 'hat',
      color: palette.green,
      sound: sounds.hat3
    },
    k: {
      name: 'hat',
      color: palette.green,
      sound: sounds.hat4
    },
    l: {
      name: 'fx',
      color: palette.orange,
      sound: sounds.vox5
    },
    ';': {
      name: 'fx',
      color: palette.orange,
      sound: sounds.vox6
    },
    z: {
      name: 'kick',
      color: palette.red,
      sound: sounds.kick1
    },
    x: {
      name: 'kick',
      color: palette.red,
      sound: sounds.kick2
    },
    c: {
      name: 'snare',
      color: palette.yellow,
      sound: sounds.snare1
    },
    v: {
      name: 'snare',
      color: palette.yellow,
      sound: sounds.snare2
    },
    b: {
      name: 'kick',
      color: palette.red,
      sound: sounds.kick3
    },
    n: {
      name: 'kick',
      color: palette.red,
      sound: sounds.kick4
    },
    m: {
      name: 'snare',
      color: palette.yellow,
      sound: sounds.snare3
    },
    ',': {
      name: 'snare',
      color: palette.yellow,
      sound: sounds.snare4
    },
    '.': {
      name: 'fx',
      color: palette.green,
      sound: sounds.various2
    }
  }
}
