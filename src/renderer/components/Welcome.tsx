import Title from './elements/Title';
import Buttons from './elements/Buttons'
import Steps from './elements/Steps'

// altro
import Box from '@mui/material/Box'
import { Input } from '@mui/material';

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
              Welcome
              Qua andrebbe il form di benvenuto
            </Box>
          </Box>
        </Box>
        <Buttons />
      </Box>
      </Box>      
    </>
  )
}
