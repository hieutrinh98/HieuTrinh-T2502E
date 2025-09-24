import logo from './logo.svg';
import './App.css';
import Login from './Page/Login';
import Authentic from './Page/Authentic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/authentic' element={<Authentic />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
