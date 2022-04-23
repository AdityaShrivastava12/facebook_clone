import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import FeedPage from './components/FeedPage';
import {Routes,Route} from 'react-router-dom';
import RequiredAuth from './components/RequiredAuth.js';
import AlreadyAuth from './components/AlreadyAuth.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<AlreadyAuth><LoginPage /></AlreadyAuth>} />
        <Route path="/signup" element={<AlreadyAuth><SignupPage /></AlreadyAuth>} />
        <Route path="/users/:id" element={<RequiredAuth><FeedPage /></RequiredAuth>} />
      </Routes>
    </div>
  );
}

export default App;
