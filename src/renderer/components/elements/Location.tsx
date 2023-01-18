/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import * as React from 'react';
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import ILocation from '../../interfaces/i-location'
import LanguageSelect from '../../lib/language-select'
import RegionSelect from '../../lib/language-select'


export default function Location( { region = 'Europe', zone = 'Rome', language = 'it_IT.UTF-9', dateNumbers = 'it_IT.UTF-9' }: ILocation) {
  return (
    <>
      <Box flexDirection="row">
        <RegionSelect />
        zone: {zone} <br />
        <LanguageSelect />
        dateNumbers: {dateNumbers} <br />
        <br />
        <br />
        <br />

      </Box>
    </>
  )
}
