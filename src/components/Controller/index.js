import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@patomation/react-ui-components'

import PadButton from '../PadButton'

import modes from './modes.js'
import hotkeys from './hotkeys.js'

const Controller = ({
  mode, names, colors, locked, keys,
  onDown, onUp,
  onDragStart, onDrag, onDrop,
  onDelete,
  onRecordStart, onRecordStop,
  style,
}) => {
  const [dragId, setDragId] = useState(null)
  const [recId, setRecId] = useState(null)

  return (
    <div className='controller' style={{
      display: 'flex',
      height: (mode === 'keyboard' ? '50%' : '100%'),
      padding: '2px',
      ...style
    }}>

      <Grid
        col={{ 16: 4, 32: 8, 48: 12, 64: 16, keyboard: 30, '32portrait': 4 }[mode]}
        row={(mode === 'keyboard' ? 5 : mode === '32portrait' ? 8 : 4)}
        gap={'2px'}
        style={{ flexGrow: 1, width: '100%' }}>

        {modes[mode](Array(64).fill().map((_, index) =>
          <PadButton
            key={`pad_${index}`}
            name={(keys && keys[hotkeys[index]]) ? keys[hotkeys[index]].name : null}
            // name={names ? names[index] : null}
            enabledColor={(keys && keys[hotkeys[index]]) ? keys[hotkeys[index]].color : null}
            // enabledColor={colors ? colors[index] : null}
            enabled={true}
            // enabled={names ? (!!names[index]) : false}
            locked={
              recId
                ? (recId !== index) // Use recording id
                : locked // Use props
            }
            draggable={!locked}
            hotkey={hotkeys ? hotkeys[index] : null}
            number={index}
            onRecordStart={() => {
              if (onRecordStart) onRecordStart(index)
              setRecId(() => index) // Set rec id. and lock the others
            }}
            onRecordStop={() => {
              if (onRecordStop) onRecordStop(index)
              setRecId(null) // reset rec id
            }}
            onDown={() => { if(onDown){ onDown(index, hotkeys[index]) } }}
            onUp={() => { if(onUp){ onUp(index, hotkeys[index]) } }}
            onDragStart={() => {
              if (onDragStart) onDragStart(index)
              setDragId(() => index)
            }}
            onDelete={() => {
              if (onDelete) onDelete(index)
            }}
            onDrag={onDrag}
            onDrop={ e => {
              if (onDrop) {
                // Convert dropped files into array
                const items = []
                const data = e.dataTransfer.items
                if (data.length > 0) {
                  for (var i = 0; i < data.length; i++) {
                    items.push(data[i].getAsFile())
                  }
                }
                onDrop({
                  source: dragId,
                  target: index,
                  items: items
                })
              }
            }}
            style={{
              gridColumn: `auto / span ${mode === 'keyboard' ? 2 : 1}`
            }} />
        ))}

      </Grid>
    </div>
  )
}

// Ensure mode prop type
Controller.propTypes = {
  mode: (props, propName, componentName) => {
    if (!['16', '32', '48', '64', 'keyboard'].includes(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.')
    }
  },
  names: PropTypes.array,
  colors: PropTypes.array,
  locked: PropTypes.bool,
  onDown: PropTypes.func,
  onUp: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDrop: PropTypes.func,
  onDelete: PropTypes.func,
  onRecordStart: PropTypes.func,
  onRecordStop: PropTypes.func
}

export default Controller
