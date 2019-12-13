import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@patomation/react-ui-components'
import colorLuminance from '../../modules/colorLuminance.js'

const mode16 = (array) => [
  ...array.slice(0, 16)
]

const mode32 = (array) => [
  ...array.slice(0, 4), ...array.slice(16, 20),
  ...array.slice(4, 8), ...array.slice(20, 24),
  ...array.slice(8, 12), ...array.slice(24, 28),
  ...array.slice(12, 16), ...array.slice(28, 32)
]

const mode48 = (array) => [
  ...array.slice(0, 4), ...array.slice(16, 20), ...array.slice(32, 36),
  ...array.slice(4, 8), ...array.slice(20, 24), ...array.slice(36, 40),
  ...array.slice(8, 12), ...array.slice(24, 28), ...array.slice(40, 44),
  ...array.slice(12, 16), ...array.slice(28, 32), ...array.slice(44, 48)
]

const mode64 = (array) => [
  ...array.slice(0, 4), ...array.slice(16, 20), ...array.slice(32, 36), ...array.slice(48, 52),
  ...array.slice(4, 8), ...array.slice(20, 24), ...array.slice(36, 40), ...array.slice(52, 56),
  ...array.slice(8, 12), ...array.slice(24, 28), ...array.slice(40, 44), ...array.slice(56, 60),
  ...array.slice(12, 16), ...array.slice(28, 32), ...array.slice(44, 48), ...array.slice(60, 64)
]

const keyboardButton = ({ title, span }) =>
  <Button
    key={`extrakey_${Math.random()}`}
    title={title}
    style={{
      gridColumn: `auto / span ${span || 1}`,
      opacity: 0.5,
      border: `1px solid ${colorLuminance('#353531', -0.5)}`,
      boxShadow: `0px 6px 0px ${colorLuminance('#353531', -0.5)}`,
      marginBottom: '6px'
    }}
    disabledStyle={{
      background: colorLuminance('#353531', -0.2),
      color: 'rgba(255,255,255,0.3)'
    }}
    disabled={true}/>

keyboardButton.propTypes = {
  title: PropTypes.string,
  span: PropTypes.number
}

const keyboard = (array) => {
  array = mode48(array)
  return [
    ...[keyboardButton({ title: '~', span: 2 })], ...array.slice(0, 12), ...[keyboardButton({ title: 'back', span: 4 })],
    ...[keyboardButton({ title: 'tab', span: 3 })], ...array.slice(12, 24), ...[keyboardButton({ title: '|', span: 3 })],
    ...[keyboardButton({ title: 'cap', span: 4 })], ...array.slice(24, 35), ...[keyboardButton({ title: 'enter', span: 4 })],
    ...[keyboardButton({ title: 'shift', span: 5 })], ...array.slice(36, 46), ...[keyboardButton({ title: 'shift', span: 5 })],
    // Bottom row with space bars and stuff for the look of it
    ...[keyboardButton({ title: 'ctrl', span: 3 })],
    ...[keyboardButton({ title: 'win', span: 3 })],
    ...[keyboardButton({ title: 'alt', span: 3 })],
    ...[keyboardButton({ title: ' ', span: 12 })],
    ...[keyboardButton({ title: 'alt', span: 3 })],
    ...[keyboardButton({ title: 'win', span: 3 })],
    ...[keyboardButton({ title: 'ctrl', span: 3 })]
  ]
}

export default {
  16: mode16,
  32: mode32,
  48: mode48,
  64: mode64,
  keyboard,
  '32portrait': mode32
}
