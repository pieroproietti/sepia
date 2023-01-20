/**
 * sepia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Welcome from './elements/Welcome';
import Location from './elements/Location';
import Keyboard from './elements/Keyboard';
import Users from './elements/Users';
import Network from './elements/Network';
import Summary from './elements/Summary';
import Finish from './elements/finish';

interface stepsProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: stepsProps) {
  const { children, value, index, ...other } = props;

  console.log('steps: ')
  console.log(props)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

/**
 *
 * @param param0
 * @returns Steps
 */
export default function Steps({ index = 1 }) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  };

  return (

    <Box sx={{ width: '1024'  }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="cuttle-fish" orientation="horizontal">
          <Tab label="Welcome" {...a11yProps(0)} />
          <Tab label="Location" {...a11yProps(1)} />
          <Tab label="Keyboard" {...a11yProps(2)} />
          <Tab label="Users" {...a11yProps(3)} />
          <Tab label="Network" {...a11yProps(4)} />
          <Tab label="Summary" {...a11yProps(5)} />
          <Tab label="Finish" {...a11yProps(6)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Welcome />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Location />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Keyboard />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Network  />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Summary />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Finish />
      </TabPanel>
    </Box>
  );
}
