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


/**
 *
 * @returns
 */
export default function RegionSelect() {
  const [region, setRegion] = React.useState('');
  const fs = require('fs')
  let zones = fs.readFileSync('/usr/share/zoneinfo/')
  process.noAsar = true
  console.log(zones)


  let elem = ''

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="region-select-label">Region</InputLabel>
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

