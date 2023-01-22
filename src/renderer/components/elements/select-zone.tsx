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

// Come farlo passare per ipcRenderer?
// import fs from 'fs'
// let zones = fs.readdirSync('/usr/share/zoneinfo/')

/**
 *
 * @returns
 */
export default function SelectZone() {
  const [zone, setZone] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setZone(event.target.value as string);

  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-zone-input-label">Zone</InputLabel>
        <Select
          labelId="select-zone-label"
          id="select-zone"
          value={zone}
          label="Zone"
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
          <MenuItem value={'Pacific'}>Pacific</MenuItem>`
        </Select>
      </FormControl>
    </Box>
  );
}


