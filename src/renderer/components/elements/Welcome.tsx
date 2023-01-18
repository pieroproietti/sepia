/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'
import IWelcome from '../../interfaces/i-welcome'

export default function Welcome({ language = 'it'}: IWelcome) {
  return (
    <>
      <Box flexDirection="column">
        language: {language} <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  )
}
