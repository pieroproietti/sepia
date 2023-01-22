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
export default function SelectKeyboardOption() {
  const [keyboardOption, setKeyboardOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setKeyboardOption(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-option-input-label">Option</InputLabel>
        <Select
          labelId="select-option-label"
          id="select-option"
          value={keyboardOption}
          label="Option"
          onChange={handleChange}
        >
          <MenuItem value="o1"></MenuItem>
          <MenuItem value="o2">o2</MenuItem>
          <MenuItem value="o3">o3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}



