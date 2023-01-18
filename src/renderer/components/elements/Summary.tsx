/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'
import ISummary from '../../interfaces/i-summary'
import IWelcome from '../../interfaces/i-welcome'
import ILocation from '../../interfaces/i-location'
import IUsers from '../../interfaces/i-users'
import INetwork from 'renderer/interfaces/i-network'

export default function Summary({ welcome = {} as IWelcome, location= {} as ILocation, users = {} as IUsers, network = {} as INetwork }: ISummary) {
  return (
    <>
      <Box flexDirection="column">
        {welcome.language} <br />
        {location.region}<br />
        {users.name}<br />
        {network.iface}<br />
        <br />
        <br />
        <br />
      </Box>
    </>
  )
}
