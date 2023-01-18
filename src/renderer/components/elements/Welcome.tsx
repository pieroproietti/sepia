/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'

type WelcomeProps = {
  language?: string,
}


export default function Welcome({ language = 'us'}: WelcomeProps) {
  return (
    <>
      <Box flexDirection="row">
        language: {language}
      </Box>
    </>
  )
}
