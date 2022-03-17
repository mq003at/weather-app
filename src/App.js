import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './NavBar';
import InputCard from './InputCard';
import InfoCard from './InfoCard';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <InputCard />
        <InfoCard />
      </Router>

    </div>
  );
}

export default App;
