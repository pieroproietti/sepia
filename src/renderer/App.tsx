/**
 * seppia: a first access system configurator
 * author: Piero Proietti
 * mail: piero.proietti@gmail.com
 */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Box from '@mui/material/Box'
import Title from './components/elements/Title'
import Steps from './components/Steps'
import Buttons from './components/elements/Buttons';

const Seppia = () => {
  return (
    <div className="Seppia">
      <Box flexDirection="row">
        <Title />
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
