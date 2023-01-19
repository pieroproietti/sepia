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

import { ipcRenderer, IpcRenderer } from 'electron/renderer';

/**
 *
 * @returns
 */
export default function SelectDataNumers() {
  const [zone, setZone] = React.useState('');

  let elem = ''


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
          <MenuItem value={'new_york'}>New York</MenuItem>
          <MenuItem value={'mato_grosso'}>Mato Grosso</MenuItem>
          <MenuItem value={'rome'}>Rome</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

