import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import Button from '@mui/material/Button';
import './App.css';

import Steps from './Steps'

const Hello = () => {
  return (
    <div>
      <h1>Seppia: an OEM installer!</h1>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Hello">
        <Steps />
        <a
          href="https://www.codiga.io/blog/build-electron-typescript-react-app/"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="contained">
            <span role="img" aria-label="Boiler">
              
            </span>
            Boiler
          </Button>
        </a>

        <a
          href="https://mui.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="contained">
            <span role="img" aria-label="Material">

            </span>
            Material
          </Button>
        </a>

        <a
          href="https://penguins-eggs.net/book/italiano9.3.html"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="contained">
            <span role="img" aria-label="Manual">

            </span>
            Manual
          </Button>
        </a>

        <a
          href="https://t.me/penguins_eggs"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="contained">
            <span role="img" aria-label="Telegram">

            </span>
            Telegram
          </Button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
