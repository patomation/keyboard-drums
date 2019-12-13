import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Button, IconButton, DragDrop } from '@patomation/react-ui-components'
import useToggle from '@patomation/usetoggle'
import setHotkey from '@patomation/hotkey'
import colorLuminance from '../../modules/colorLuminance.js'

const PadButton = ({
  style,
  name, number, hotkey,
  enabled, enabledColor,
  locked,
  onDelete, onToggleSustain,
  onDragStart, onDrop, onDrag, onDragEnd,
  onDown, onUp,
  onRecordStart, onRecordStop,
  draggable
}) => {
  const [over, setOver] = useState(false)
  const [active, setActive] = useState(false)
  const [rec, toggleRec] = useToggle(false)

  useEffect(() => {
    if (hotkey) {
      setHotkey(hotkey)
        .down(() => {
          setActive(_ => true)
          if (onDown && enabled) onDown()
        })
        .up(() => {
          setActive(_ => false)
          if (onUp && enabled) onUp()
        })
    }
    // Unmount
    return () => {
      setHotkey.remove(hotkey)
    }
  }, [onDown])

  return (
    <DragDrop
      className={'pad-button'}
      draggable={!!draggable}
      onDragStart={(e) => {
        if (onDragStart) onDragStart()
      }}
      onDrag={onDrag}
      onDragOver={() => {
        setOver(true)
      }}
      onDragLeave={() => {
        setOver(false)
      }}
      onDragEnd={onDragEnd}
      onDrop={(e) => {
        if (onDrop) onDrop(e)
        setOver(false)
      }}
      style={{
        ...{
          position: 'relative',
          overflow: 'hidden',
          paddingBottom: '6px',
          borderRadius: '6px'
        },
        ...style
      }}>

      { !locked && !enabled
        ? <IconButton
          name={ rec ? 'stop' : 'fiber_manual_record'}
          onClick={() => {
            if (!rec && onRecordStart) {
              onRecordStart()
              toggleRec(true)
            } else if (onRecordStop) {
              onRecordStop()
              toggleRec(false)
            }
          }}
          style={{
            position: 'absolute',
            zIndex: 10,
            left: '.25rem',
            top: '.25rem',
            color: '#000000'
          }} /> : null }

      { !locked && enabled
        ? <IconButton
          name='close'
          onClick={onDelete}
          style={{
            position: 'absolute',
            zIndex: 10,
            right: '.25rem',
            top: '.25rem',
            color: '#000000'
          }} /> : null }

      <Button
        // active={active}
        enabled={enabled}
        onDown={() => {
        // If not recording down event
          if (!rec && onDown && enabled) {
            onDown()
            // Stop recording if recodring
          } else if (rec) {
            onRecordStop()
            toggleRec(false)
          }
        }}
        onUp={onUp}
        onHover={(hovering) => {
        // if(!hovering) pad.pause()
        }}
        style={{
          ...{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '100%',
            zIndex: 0,
            borderRadius: '6px',

            background: colorLuminance(rec ? '#dc322f' : '#353531', -0.2),
            border: `1px solid ${colorLuminance(rec ? '#dc322f' : '#353531', -0.5)}`,
            boxShadow: `0px 16px 0px ${colorLuminance(rec ? '#dc322f' : '#353531', -0.5)}`,
            color: 'rgba(255,255,255,0.2)',

            transition: `
            background 150ms ease-in-out,
            transform 150ms ease,
            border 150ms ease-in-out,
            box-shadow 150ms ease-in-out `
          },
          ...(over === true ? {
            filter: 'brightness(70%)'
          } : null)
        }}
        hoverStyle={{
          filter: 'brightness(85%)' // 100% is baseline 85% is 15% daker
        }}
        enabledStyle={{
          background: colorLuminance(enabledColor || '#016fb9', 0),
          border: `1px solid ${colorLuminance(enabledColor || '#016fb9', -0.5)}`,
          boxShadow: `0px 16px 0px ${colorLuminance(enabledColor || '#016fb9', -0.5)}`,
          color: 'rgba(255,255,255,0.4)'
        }}
        activeStyle={{
          filter: 'brightness(130%)',
          // color: 'rgba(255,255,255,0.4)'
        }}
      >
        <div style={{
          color: 'rgba(0,0,0,0.5)',
          fontSize: '0.75rem'
        }}>{name}</div>
        <div style={{
          position: 'absolute',
          right: '.25rem',
          bottom: '.25rem'
        }}>{number}</div>
        <div style={{
          position: 'absolute',
          left: '.25rem',
          bottom: '.25rem'
        }}>{hotkey}</div>
      </Button>
    </DragDrop>
  )
}

PadButton.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
  number: PropTypes.number,
  hotkey: PropTypes.string,
  enabled: PropTypes.bool,
  enabledColor: PropTypes.string,
  locked: PropTypes.bool,
  onDelete: PropTypes.func,
  onToggleSustain: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDown: PropTypes.func,
  onUp: PropTypes.func,
  onRecordStart: PropTypes.func,
  onRecordStop: PropTypes.func,
  draggable: PropTypes.bool
}

export default PadButton
