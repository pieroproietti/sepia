/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import * as React from 'react';
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// own
import IWelcome from '../../interfaces/i-welcome'
import SelectLanguage from './select-language'

/**
 *
 * @param param0
 * @returns
 */
export default function Welcome({ language = 'it'}: IWelcome) {
  return (
    <>
      <Box flexDirection="column">
        <SelectLanguage />
      </Box>
    </>
  )
}
