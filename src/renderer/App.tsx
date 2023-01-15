import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Buttons from './components/Buttons'
import Steps from './components/Steps'

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <Steps />
        <Buttons />
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
