import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/seppia.png';
import './App.css';

const Hello = () => {
  return (
    <div>
      <h1>Seppia: an OEM installer!</h1>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Hello">
        <a
          href="https://penguins-eggs.net/book/italiano9.3.html"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="Instructions">
              
            </span>
            Run
          </button>
        </a>
        <a
          href="https://penguins-eggs.net/book/italiano9.3.html"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="Instructions">

            </span>
            Manual
          </button>
        </a>

        <a
          href="https://t.me/penguins_eggs"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">

            </span>
            Telegram
          </button>
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
