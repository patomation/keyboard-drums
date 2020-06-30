import * as React from 'react'
import { useState, useEffect, ReactElement } from 'react'

import { Button, IconButton, DragDrop } from '@patomation/ui'
import useToggle from '@patomation/usetoggle'
import setHotkey from '@patomation/hotkey'
import colorLuminance from '../../modules/colorLuminance'

export interface Props {
  name?: string
  number?: number
  hotkey?: string
  enabled?: boolean
  enabledColor?: string
  locked?: boolean
  onDelete?: () => void
  onToggleSustain?: () => void
  onDragStart?: () => void
  onDrop?: (e: {
    dataTransfer:{
      items: {
        getAsFile: () => string
      }[]
    }
  }) => void
  onDrag?: () => void
  // onDragEnd?: () => void // TODO: disabled for now
  onDown?: () => void
  onUp?: () => void
  onRecordStart?: () => void
  onRecordStop?: () => void
  draggable?: boolean
  style?: Record<string, unknown>
}

export default function PadButton ({
  name, number, hotkey,
  enabled, enabledColor,
  locked,
  onDelete,
  onDragStart, onDrop, onDrag,
  // onDragEnd,
  onDown, onUp,
  onRecordStart, onRecordStop,
  draggable,
  style
}: Props): ReactElement {
  const [over, setOver] = useState(false)
  const [active, setActive] = useState(false)
  const [rec, toggleRec] = useToggle(false)

  useEffect(() => {
    if (hotkey) {
      setHotkey(hotkey)
        .down(() => {
          setActive(() => true)
          if (onDown && enabled) onDown()
        })
        .up(() => {
          setActive(() => false)
          if (onUp && enabled) onUp()
        })
    }
    // Un mount
    return () => {
      setHotkey.remove(hotkey)
    }
  }, [onDown])

  return (
    <DragDrop
      className={'pad-button'}
      draggable={!!draggable}
      onDragStart={() => {
        if (onDragStart) onDragStart()
      }}
      onDrag={onDrag}
      onDragOver={() => {
        setOver(true)
      }}
      onDragLeave={() => {
        setOver(false)
      }}
      // onDragEnd={onDragEnd}
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
        active={active}
        enabled={enabled}
        onDown={() => {
        // If not recording down event
          if (!rec && onDown && enabled) {
            onDown()
            // Stop recording if recording
          } else if (rec) {
            onRecordStop()
            toggleRec(false)
          }
        }}
        onUp={onUp}
        onHover={(/* hovering */) => {
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
          filter: 'brightness(85%)' // 100% is baseline 85% is 15% darker
        }}
        enabledStyle={{
          background: colorLuminance(enabledColor || '#016fb9', 0),
          border: `1px solid ${colorLuminance(enabledColor || '#016fb9', -0.5)}`,
          boxShadow: `0px 16px 0px ${colorLuminance(enabledColor || '#016fb9', -0.5)}`,
          color: 'rgba(255,255,255,0.4)'
        }}
        activeStyle={{
          filter: 'brightness(130%)'
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
