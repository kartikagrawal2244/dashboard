import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './layout/Dashboard';
import Login from './auth/Login';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
