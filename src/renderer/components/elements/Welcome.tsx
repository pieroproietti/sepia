/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'

interface WelcomeProps {
  language?: string
}


export default function Welcome({ language = 'it'}: WelcomeProps) {
  return (
    <>
      <Box flexDirection="column">
        language: {language}
      </Box>
    </>
  )
}
