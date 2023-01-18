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

// own
import IWelcome from '../../interfaces/i-welcome'

/**
 *
 * @returns
 */
function LanguageSelect() {
  const [lang, setLang] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="lang-select-language-label"
          id="lang-select-language"
          value={lang}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={1}>br</MenuItem>
          <MenuItem value={2}>it</MenuItem>
          <MenuItem value={3}>us</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

/**
 *
 * @param param0
 * @returns
 */
export default function Welcome({ language = 'it'}: IWelcome) {
  return (
    <>
      <Box flexDirection="column">
        <LanguageSelect />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
    </>
  )
}
