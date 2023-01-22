/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

import IUsers from '../../interfaces/i-users'

export default function Users( { name = 'artisan', fullname = 'Piero Proietti', password = 'evolution', rootPassword = 'evolution', hostname =  'colibri', autologin = true, sameUserPassword = true }: IUsers) {
  return (
    <>
      <Box flexDirection="row">
        <FormGroup>

          <TextField id="username" label="User name" variant="standard" value={name}/>
          <TextField id="fullname" label="Full user name" variant="standard" value={fullname} />
          <FormControlLabel
            id="autologin"
            name="autologin"
            value={autologin}
            control={<Checkbox defaultChecked />}
            label="Autologin" />
          <TextField id="password" label="User password" variant="standard" value={password} />
          <TextField id="hostname" label="Host name" variant="standard" value={hostname} />
          <FormControlLabel
            id="sameUserPassword"
            name="sameUserPassword"
            value={sameUserPassword}
            control={<Checkbox defaultChecked />}
            label="Same user password" />
          <TextField id="rootPassword" label="Root password" variant="standard" value={password} />
        </FormGroup>
      </Box>
    </>
  )
}
