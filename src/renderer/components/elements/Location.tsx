/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import ILocation from '../../interfaces/i-location'
import Box from '@mui/material/Box'

export default function Location( { region = 'Europe', zone = 'Rome', language = 'it_IT.UTF-9', dateNumbers = 'it_IT.UTF-9' }: ILocation) {
  return (
    <>
      <Box flexDirection="row">
        region: {region} <br />
        zone: {zone} <br />
        language: {language} <br />
        dateNumbers: {dateNumbers} <br />
        <br />
        <br />
        <br />

      </Box>
    </>
  )
}
