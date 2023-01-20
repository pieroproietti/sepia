/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'
import INetwork from 'renderer/interfaces/i-network'

export default function Users( { iface = 'eth0', addressType = 'dhcp', address = '', netmask= '', gateway = '', domain = '', dns = '' }: INetwork) {
  return (
    <>
      <Box flexDirection="row">
        iface: {iface} <br />
        addressType: {addressType} <br />
        netmask: {netmask} <br />
        gateway: {gateway} <br />
        domain: {domain} <br />
        dns: {dns} <br />

        <br />
      </Box>
    </>
  )
}
