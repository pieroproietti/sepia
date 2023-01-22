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
export default function SelectKeyboardLayout() {
  const [keyboardLayout, setKeyboardLayout] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setKeyboardLayout(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-layout-input-label">Layout</InputLabel>
        <Select
          labelId="select-layout-label"
          id="select-layout"
          value={keyboardLayout}
          label="Layout"
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


