/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

import Box from '@mui/material/Box'
import Welcome from './components/elements/Welcome'
import Location from './components/elements/Location'
import Steps from './components/Steps'
import Buttons from './components/elements/Buttons';

const Seppia = () => {
  return (
    <div className="Seppia">
      <Box flexDirection="row">
        <img width="100" alt="icon" src={icon} />
        &nbsp; Seppia: an OEM installer
        <Steps />
        <Buttons />
        </Box>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Seppia />} />
      </Routes>
    </Router>
  );
}
