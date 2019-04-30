import React from 'react';

import './keyboard.scss';

import vocal1 from '../sounds/vocals/Fresh.mp3';
import vocal2 from '../sounds/vocals/Ah_Yeahh.mp3';
import vocal3 from '../sounds/vocals/Ahleuu.mp3';
import vocal4 from '../sounds/vocals/Bass.mp3';
import vocal5 from '../sounds/vocals/All_That_Scratch_Is_Making_Me_Itch.mp3';
import vocal6 from '../sounds/vocals/Brand_New.mp3';
import vocal7 from '../sounds/vocals/Break_1.mp3';
import vocal8 from '../sounds/vocals/Break_2.mp3';
import vocal9 from '../sounds/vocals/Break_It_Down_Like_This.mp3';
import vocal10 from '../sounds/vocals/Go.mp3';
import vocal11 from '../sounds/vocals/Call_The_Cops.mp3';
import vocal12 from '../sounds/vocals/Here_We_Go.mp3';

import various1 from '../sounds/various/Alarm.mp3';
import various2 from '../sounds/various/Chime.mp3';
import various3 from '../sounds/various/Zing.mp3';
import various4 from '../sounds/various/Scratch_1.mp3';
import various5 from '../sounds/various/Scratch_2.mp3';
import various6 from '../sounds/various/Scratch.mp3';
import various7 from '../sounds/various/Scream.mp3';
import various8 from '../sounds/various/Stab_1.mp3';
import various9 from '../sounds/various/Stab_2.mp3';
import various10 from '../sounds/various/Stab_3.mp3';
import various11 from '../sounds/various/Stab_4.mp3';
import various12 from '../sounds/various/Stab_5.mp3';

import snare1 from '../sounds/lofi-chill/snares/540_snare.mp3';
import snare2 from '../sounds/lofi-chill/snares/awkward_snare.mp3';
import snare3 from '../sounds/lofi-chill/snares/badguy_snare.mp3';
import snare4 from '../sounds/lofi-chill/snares/bappa_snare.mp3';

import kick1 from '../sounds/lofi-chill/kicks/540_kick.mp3';
import kick2 from '../sounds/lofi-chill/kicks/cala_kick.mp3';
import kick3 from '../sounds/lofi-chill/kicks/downhill_kick.mp3';
import kick4 from '../sounds/lofi-chill/kicks/eevee_kick.mp3';

import hat1 from '../sounds/lofi-chill/hats/540_hat.mp3';
import hat2 from '../sounds/lofi-chill/hats/abisal_hat.mp3';
import hat3 from '../sounds/lofi-chill/hats/anti_hat.mp3';
import hat4 from '../sounds/lofi-chill/hats/brotherly_hat.mp3';

import oneshot1 from '../sounds/various/Radar_Boop.mp3';
import oneshot2 from '../sounds/various/Roll_1.mp3';
import oneshot3 from '../sounds/various/Roll_2.mp3';
import oneshot4 from '../sounds/various/Rock_Dance.mp3';
import oneshot5 from '../sounds/various/Scratch_1.mp3';
import oneshot6 from '../sounds/various/Scratch_2.mp3';

import vox1 from '../sounds/lofi-chill/vox/dilla_siren.mp3';
import vox2 from '../sounds/lofi-chill/vox/insert.mp3';
import vox3 from '../sounds/lofi-chill/vox/paah.mp3';
import vox4 from '../sounds/lofi-chill/vox/token.mp3';
import vox5 from '../sounds/lofi-chill/vox/uhh.mp3';
import vox6 from '../sounds/lofi-chill/vox/yo.mp3';

import chord1 from '../sounds/chords/epiano/C_epiano.mp3';
import chord2 from '../sounds/chords/epiano/Cm_epiano.mp3';
import chord3 from '../sounds/chords/epiano/Em_epiano.mp3';
import chord4 from '../sounds/chords/epiano/Fsharp_epiano.mp3';
import chord5 from '../sounds/chords/epiano/G_epiano.mp3';
import chord6 from '../sounds/chords/epiano/Bdim_epiano.mp3';

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
  '1': new keyAudio('1', chord1),
  '2': new keyAudio('1', chord2),
  '3': new keyAudio('1', chord3),
  '4': new keyAudio('1', chord4),
  '5': new keyAudio('1', chord5),
  '6': new keyAudio('1', chord6),
  '7': new keyAudio('1', vocal7),
  '8': new keyAudio('1', vocal8),
  '9': new keyAudio('1', vocal9),
  '0': new keyAudio('1', vocal10),
  '-': new keyAudio('1', vocal11),
  '=': new keyAudio('1', vocal12),

  q: new keyAudio('q', various1),
  w: new keyAudio('q', various2),
  e: new keyAudio('q', various3),
  r: new keyAudio('q', various4),
  t: new keyAudio('q', various5),
  y: new keyAudio('q', various6),
  u: new keyAudio('q', various7),
  i: new keyAudio('q', various8),
  o: new keyAudio('q', various9),
  p: new keyAudio('q', various10),
  '[': new keyAudio('q', various11),
  ']': new keyAudio('q', various12),

  a: new keyAudio('q', vox1),
  s: new keyAudio('q', vox2),
  d: new keyAudio('q', hat1),
  f: new keyAudio('q', hat2),
  g: new keyAudio('q', vox3),
  h: new keyAudio('q', vox4),
  j: new keyAudio('q', hat3),
  k: new keyAudio('q', hat4),
  l: new keyAudio('q', vox5),
  ';': new keyAudio('q', vox6),

  z: new keyAudio('q', kick1),
  x: new keyAudio('q', kick2),
  c: new keyAudio('q', snare1),
  v: new keyAudio('q', snare2),
  b: new keyAudio('q', kick3),
  n: new keyAudio('q', kick4),
  m: new keyAudio('q', snare3),
  ',': new keyAudio('q', snare4),
  '.': new keyAudio('q', various2),
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
