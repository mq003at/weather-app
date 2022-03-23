import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './NavBar';
import InfoCard from './InfoCard';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <InfoCard />
      </Router>

    </div>
  );
}

export default App;
