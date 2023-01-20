/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import Box from '@mui/material/Box'

import ILocation from '../../interfaces/i-location'
import SelectLanguage from './select-language-'
import SelectRegion from './select-region'
import SelectZone from './select-zone'

export default function Location( { region = 'Europe', zone = 'Rome', language = 'it_IT.UTF-9', dateNumbers = 'it_IT.UTF-9' }: ILocation) {
  return (
    <>
      <Box flexDirection="row">
        <SelectRegion />
        <SelectZone />
        <SelectLanguage />
        dateNumbers: {dateNumbers} <br />
        <br />
        <br />
        <br />

      </Box>
    </>
  )
}
