/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'
import IUsers from '../../interfaces/i-users'

export default function Users( { name = 'sepia', fullname = 'sepia', password = 'evolution', rootPassword = 'evolution', hostname =  'colibri', autologin = true, sameUserPassword = true }: IUsers) {
  return (
    <>
      <Box flexDirection="row">
        <form>
          name: <input type="text" name="name" value={name} /><br />
          fullname: <input type="text" name="fullname" value={fullname} /><br />
          password: <input type="password" name="password" value={password} /><br />
          rootPassword: <input type="password" name="rootpassword" value={rootPassword} /><br />
          hostname: <input type="text" name="hostname" value={hostname} /><br />
          autologin: <input type="radio" name="autologin"/><br />
          sameUserPassword: <input type="radio" name="sameUserPassword"/><br />
        </form>
      </Box>
    </>
  )
}
