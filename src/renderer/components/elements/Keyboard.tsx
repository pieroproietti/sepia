/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'
import IKeyboard from '../../interfaces/i-keyboard'
import SelectKeyboardModel from './select-keyboard-model'
import SelectKeyboardLayout from './select-keyboard-layout'
import SelectKeyboardVariant from './select-keyboard-variant'
import SelectKeyboardOption from './select-keyboard-option'

/**
 *
 * @param param0
 * @returns
 */
export default function Keyboard( { keyboardModel= 'pc105', keyboardLayout='it', keyboardVariant= '', keyboardOptions='' }:  IKeyboard) {
  return (
    <>
      <Box flexDirection="row">
        <SelectKeyboardModel />
        <SelectKeyboardLayout />
        <SelectKeyboardVariant />
        <SelectKeyboardOption />
        <br />
        <br />
        <br />
      </Box>
    </>
  )
}

