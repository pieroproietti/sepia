/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'

interface NetworkProps {
  iface?: string,
  addressType?: string,
  address?: string,
  netmask?: string,
  gateway?: string,
  domain: string
  dns?: string,
}

export default function Users( { iface = 'eth0', addressType = 'dhcp', address = '', netmask= '', gateway = '', domain = '', dns = '' }: NetworkProps) {
  return (
    <>
      <Box flexDirection="row">
        iface: {iface} <br />
        addressType: {addressType} <br />
        netmask: {netmask} <br />
        gateway: {gateway} <br />
        domain: {domain} <br />
        dns: {dns} <br />
      </Box>
    </>
  )
}
