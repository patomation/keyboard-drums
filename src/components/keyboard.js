import React from 'react';

import './keyboard.scss';

import sounds from './sounds.js';

// Make object class
class keyAudio {
  constructor(hotKey, audioSource) {
    this.audioSource = audioSource;
    this.key = hotKey;
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

const keyAudios = {
  '1': new keyAudio('1', sounds.chord1),
  '2': new keyAudio('1', sounds.chord2),
  '3': new keyAudio('1', sounds.chord3),
  '4': new keyAudio('1', sounds.chord4),
  '5': new keyAudio('1', sounds.chord5),
  '6': new keyAudio('1', sounds.chord6),
  '7': new keyAudio('1', sounds.vocal7),
  '8': new keyAudio('1', sounds.vocal8),
  '9': new keyAudio('1', sounds.vocal9),
  '0': new keyAudio('1', sounds.vocal10),
  '-': new keyAudio('1', sounds.vocal11),
  '=': new keyAudio('1', sounds.vocal12),

  q: new keyAudio('q',   sounds.various1),
  w: new keyAudio('q',   sounds.various2),
  e: new keyAudio('q',   sounds.various3),
  r: new keyAudio('q',   sounds.various4),
  t: new keyAudio('q',   sounds.various5),
  y: new keyAudio('q',   sounds.various6),
  u: new keyAudio('q',   sounds.various7),
  i: new keyAudio('q',   sounds.various8),
  o: new keyAudio('q',   sounds.various9),
  p: new keyAudio('q',   sounds.various10),
  '[': new keyAudio('q', sounds.various11),
  ']': new keyAudio('q', sounds.various12),

  a: new keyAudio('q',   sounds.vox1),
  s: new keyAudio('q',   sounds.vox2),
  d: new keyAudio('q',   sounds.hat1),
  f: new keyAudio('q',   sounds.hat2),
  g: new keyAudio('q',   sounds.vox3),
  h: new keyAudio('q',   sounds.vox4),
  j: new keyAudio('q',   sounds.hat3),
  k: new keyAudio('q',   sounds.hat4),
  l: new keyAudio('q',   sounds.vox5),
  ';': new keyAudio('q', sounds.vox6),

  z: new keyAudio('q',   sounds.kick1),
  x: new keyAudio('q',   sounds.kick2),
  c: new keyAudio('q',   sounds.snare1),
  v: new keyAudio('q',   sounds.snare2),
  b: new keyAudio('q',   sounds.kick3),
  n: new keyAudio('q',   sounds.kick4),
  m: new keyAudio('q',   sounds.snare3),
  ',': new keyAudio('q', sounds.snare4),
  '.': new keyAudio('q', sounds.various2),
};

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: new Object() };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

    // Start keyboard keyboardListener
    this.keyboardListener();
  }

  componentDidMount() {
    console.log('IM MOUNTED');
  }

  makeActive(key) {
    const oldStateObject = this.state.active;
    oldStateObject[key] = true;
    this.setState({ active: oldStateObject });
  }

  makeDeactive(key) {
    const oldStateObject = this.state.active;
    oldStateObject[key] = false;
    this.setState({ active: oldStateObject });
  }

  handleHotkeyDown(key) {
    this.makeActive(key);
    if (keyAudios[key] !== undefined) {
      keyAudios[key].play();
    }
  }

  handleHotkeyUp(key) {
    this.makeDeactive(key);
    if (keyAudios[key] !== undefined) {
      keyAudios[key].pause();
    }
  }

  keyboardListener() {
    const This = this;
    window.onkeydown = function(e) {
      This.handleHotkeyDown(e.key);
    };
    window.onkeyup = function(e) {
      This.handleHotkeyUp(e.key);
    };
  }

  handleMouseDown(e) {
    console.log('mouse down');
    console.log(this);
    const key = e.target.id;
    console.log(key);
    this.handleHotkeyDown(key);
  }

  handleClick(e) {
    console.log('mouse up');
    const key = e.target.id;
    console.log(this);
    this.handleHotkeyUp(key);
  }

  render() {
    return (
      <div className="keyboard">
        <div className="main">
          <div className="disabled key function space1">Esc</div>
          <div className="function-keys">
            <div className="disabled key function">F1</div>
            <div className="disabled key function">F2</div>
            <div className="disabled key function">F3</div>

            <div className="disabled key function space2">F4</div>
            <div className="disabled key function">F5</div>
            <div className="disabled key function">F6</div>
            <div className="disabled key function">F7</div>
            <div className="disabled key function space2">F8</div>

            <div className="disabled key function">F9</div>
            <div className="disabled key function">F10</div>
            <div className="disabled key function">F11</div>
            <div className="disabled key function">F12</div>
          </div>

          <div className="disabled key num dual">
            &#126; <br /> &#96;
          </div>

          <div
            id="1"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['1'] ? 'active' : ''} key num dual`}
          >
            &#33; <br /> 1
          </div>

          <div
            id="2"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['2'] ? 'active' : ''} key num dual`}
          >
            &#64; <br /> 2
          </div>
          <div
            id="3"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['3'] ? 'active' : ''} key num dual`}
          >
            &#35; <br /> 3
          </div>
          <div
            id="4"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['4'] ? 'active' : ''} key num dual`}
          >
            &#36; <br /> 4
          </div>
          <div
            id="5"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['5'] ? 'active' : ''} key num dual`}
          >
            &#37; <br /> 5
          </div>
          <div
            id="6"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['6'] ? 'active' : ''} key num dual`}
          >
            &#94; <br /> 6
          </div>
          <div
            id="7"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['7'] ? 'active' : ''} key num dual`}
          >
            &#38; <br /> 7
          </div>
          <div
            id="8"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['8'] ? 'active' : ''} key num dual`}
          >
            &#42; <br /> 8
          </div>
          <div
            id="9"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['9'] ? 'active' : ''} key num dual`}
          >
            &#40; <br /> 9
          </div>
          <div
            id="0"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['0'] ? 'active' : ''} key num dual`}
          >
            &#41; <br /> 0
          </div>
          <div
            id="-"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['-'] ? 'active' : ''} key num dual`}
          >
            &#95; <br /> &#45;
          </div>
          <div
            id="="
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['='] ? 'active' : ''} key num dual`}
          >
            &#43; <br /> &#61;
          </div>
          <div className="disabled key backspace">Backspace</div>

          <div className="disabled key tab">Tab</div>
          <div
            id="q"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.q ? 'active' : ''} key letter`}
          >
            Q
          </div>
          <div
            id="w"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.w ? 'active' : ''} key letter`}
          >
            W
          </div>
          <div
            id="e"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.e ? 'active' : ''} key letter`}
          >
            E
          </div>
          <div
            id="r"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.r ? 'active' : ''} key letter`}
          >
            R
          </div>
          <div
            id="t"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.t ? 'active' : ''} key letter`}
          >
            T
          </div>
          <div
            id="y"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.y ? 'active' : ''} key letter`}
          >
            Y
          </div>
          <div
            id="u"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.u ? 'active' : ''} key letter`}
          >
            U
          </div>
          <div
            id="i"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.i ? 'active' : ''} key letter`}
          >
            I
          </div>
          <div
            id="o"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.o ? 'active' : ''} key letter`}
          >
            O
          </div>
          <div
            id="p"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.p ? 'active' : ''} key letter`}
          >
            P
          </div>
          <div
            id="["
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['['] ? 'active' : ''} key dual`}
          >
            &#123; <br /> &#91;
          </div>
          <div
            id="]"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active[']'] ? 'active' : ''} key dual`}
          >
            &#125; <br /> &#93;
          </div>
          <div className="disabled key letter dual slash">
            &#124; <br /> &#92;
          </div>
          <div className="disabled key caps">
            Caps <br /> Lock
          </div>
          <div
            id="a"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.a ? 'active' : ''} key letter`}
          >
            A
          </div>
          <div
            id="s"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.s ? 'active' : ''} key letter`}
          >
            S
          </div>
          <div
            id="d"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.d ? 'active' : ''} key letter`}
          >
            D
          </div>
          <div
            id="f"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.f ? 'active' : ''} key letter`}
          >
            F
          </div>
          <div
            id="g"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.g ? 'active' : ''} key letter`}
          >
            G
          </div>
          <div
            id="h"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.h ? 'active' : ''} key letter`}
          >
            H
          </div>
          <div
            id="j"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.j ? 'active' : ''} key letter`}
          >
            J
          </div>
          <div
            id="k"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.k ? 'active' : ''} key letter`}
          >
            K
          </div>
          <div
            id="l"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.l ? 'active' : ''} key letter`}
          >
            L
          </div>
          <div
            id=";"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active[';'] ? 'active' : ''} key dual`}
          >
            &#58; <br /> &#59;
          </div>
          <div className="disabled key dual">
            &#34; <br /> &#39;
          </div>
          <div className="disabled key enter">Enter</div>

          <div className="disabled key shift left">Shift</div>
          <div
            id="z"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.z ? 'active' : ''} key letter`}
          >
            Z
          </div>
          <div
            id="x"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.x ? 'active' : ''} key letter`}
          >
            X
          </div>
          <div
            id="c"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.c ? 'active' : ''} key letter`}
          >
            C
          </div>
          <div
            id="v"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.v ? 'active' : ''} key letter`}
          >
            V
          </div>
          <div
            id="b"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.b ? 'active' : ''} key letter`}
          >
            B
          </div>
          <div
            id="n"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.n ? 'active' : ''} key letter`}
          >
            N
          </div>
          <div
            id="m"
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active.m ? 'active' : ''} key letter`}
          >
            M
          </div>
          <div
            id=","
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active[','] ? 'active' : ''} key dual`}
          >
            &#60; <br /> &#44;
          </div>
          <div
            id="."
            onMouseDown={this.handleMouseDown.bind(this)}
            onClick={this.handleClick}
            className={`${this.state.active['.'] ? 'active' : ''} key dual`}
          >
            &#62; <br /> &#46;
          </div>
          <div className="disabled key dual">
            &#63; <br /> &#47;
          </div>
          <div className="disabled key shift right">Shift</div>
          <div className="disabled key ctrl">Ctrl</div>
          <div className="disabled key">
            <span role="img" aria-label="lightning">
              &#9889;
            </span>
          </div>
          <div className="disabled key">Alt</div>
          <div className="disabled key space" />
          <div className="disabled key">Alt</div>
          <div className="disabled key">
            <span role="img" aria-label="lightning">
              &#9889;
            </span>
          </div>
          <div className="disabled key">Prnt</div>
          <div className="disabled key ctrl">Ctrl</div>
        </div>

        <div className="side">
          <div className="disabled key function small">Prnt Scrn</div>
          <div className="disabled key function small">Scroll Lock</div>
          <div className="disabled key function small">Pause Break</div>

          <div className="sec-func">
            <div className="disabled key">Insert</div>
            <div className="disabled key">Home</div>
            <div className="disabled key dual">Page Up</div>
            <div className="disabled key">Del</div>
            <div className="disabled key">End</div>
            <div className="disabled key dual">Page Down</div>

            <div className="disabled arrows">
              <div className="key hidden" />
              <div className="disabled key">&#94;</div>
              <div className="key hidden" />
              <div className="disabled key">&#60;</div>
              <div className="disabled key">v</div>
              <div className="disabled key">&#62;</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Keyboard;
