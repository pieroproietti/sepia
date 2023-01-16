import Title from './elements/Title';
import Buttons from './elements/Buttons'
import Steps from './elements/Steps'

// altro
import Box from '@mui/material/Box'

type WelcomeProps = {
  language?: string,
}


export default function Welcome({ language = ''}: WelcomeProps) {
  return (
    <>
      <Box>
      <Title/>
      <Box flexDirection="column">
        <Box flexDirection="column">
          We are installing
          <Box flexDirection="row">
            <Steps />
            <Box flexDirection="column">
              Benvenuto
            </Box>
          </Box>
        </Box>
        <Buttons />
      </Box>
      </Box>      
    </>
  )
}
