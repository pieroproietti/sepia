/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'

type keyboardProps = {
  keyboardModel?: string,
  keyboardLayout?: string,
  keyboardVariant?: string,
  keyboardOptions?: string,
}

export default function Keyboard( { keyboardModel= 'pc105', keyboardLayout='it', keyboardVariant= '', keyboardOptions='' }:  keyboardProps) {
  return (
    <>
      <Box flexDirection="row">
          model: {keyboardModel} <br />
          layout: {keyboardLayout} <br />
          variant: {keyboardVariant} <br />
          options: {keyboardOptions} <br />
      </Box>
    </>
  )
}
