/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'

type LocationProps = {
  region?: string,
  zone?: string,
  language?: string,
  dateNumbers?: string
}

export default function Location( { region = 'Europe', zone = 'Rome', language = 'it_IT.UTF-9', dateNumbers = 'it_IT.UTF-9' }: LocationProps) {
  return (
    <>
      <Box flexDirection="row">
          region: {region} <br />
          zone: {zone} <br />
          language: {language} <br />
          dateNumbers: {dateNumbers} <br />
      </Box>
    </>
  )
}
