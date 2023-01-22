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
export default function SelectKeyboardModel() {
  const [keyboardModel, setKeyboardModel] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setKeyboardModel(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-model-input-label">Model</InputLabel>
        <Select
          labelId="select-model-label"
          id="select-model"
          value={keyboardModel}
          label="Model"
          onChange={handleChange}
        >
          <MenuItem value={1}>pc105</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


