/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'
import IUsers from '../../interfaces/i-users'

export default function Users( { name = 'seppia', fullname = 'seppia', password = 'evolution', rootPassword = 'evolution', hostname =  'colibri', autologin = true, sameUserPassword = true }: IUsers) {
  return (
    <>
      <Box flexDirection="row">
      name: {name} <br />
          fullname: {fullname} <br />
          password: {password} <br />
          rootPassword: {rootPassword} <br />
          hostname: {hostname} <br />
          autologin: {autologin} <br />
          sameUserPassword: {sameUserPassword} <br />
      </Box>
    </>
  )
}
