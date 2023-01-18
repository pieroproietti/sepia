/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'
import IKeyboard from '../../interfaces/i-keyboard'

export default function Keyboard( { keyboardModel= 'pc105', keyboardLayout='it', keyboardVariant= '', keyboardOptions='' }:  IKeyboard) {
  return (
    <>
      <Box flexDirection="row">
        model: {keyboardModel} <br />
        layout: {keyboardLayout} <br />
        variant: {keyboardVariant} <br />
        options: {keyboardOptions} <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  )
}

