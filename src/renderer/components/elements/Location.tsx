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

/**
 *
 * @returns
 */
function RegionSelect() {
  const [region, setRegion] = React.useState('');
  // ['Atlantic', 'Africa', 'America', 'Antarctica', 'Artic', 'Australia', 'Europe', 'India', 'Pacific']

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="region-select-label">Language</InputLabel>
        <Select
          labelId="region-select-label"
          id="region-select"
          value={region}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value={'Atlantic'}>Atlantic</MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'America'}>America</MenuItem>
          <MenuItem value={'Antartica'}>Antartica</MenuItem>
          <MenuItem value={'Artic'}>Artic</MenuItem>
          <MenuItem value={'Australia'}>Australia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'India'}>India</MenuItem>
          <MenuItem value={'Pacific'}>Pacific</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}



export default function Location( { region = 'Europe', zone = 'Rome', language = 'it_IT.UTF-9', dateNumbers = 'it_IT.UTF-9' }: ILocation) {
  return (
    <>
      <Box flexDirection="row">
        <RegionSelect />
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
