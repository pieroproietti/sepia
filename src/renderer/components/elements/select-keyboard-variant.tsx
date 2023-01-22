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

/**
 *
 * @returns
 */
export default function SelectKeyboardVariant() {
  const [keyboardVariant, setKeyboardVariant] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setKeyboardVariant(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-variant-input-label">Variant</InputLabel>
        <Select
          labelId="select-variant-label"
          id="select-variant"
          value={keyboardVariant}
          label="Variant"
          onChange={handleChange}
        >
          <MenuItem value="v1"></MenuItem>
          <MenuItem value="v2">v2</MenuItem>
          <MenuItem value="v3">v3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


