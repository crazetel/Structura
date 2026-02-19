import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import './App.css';

// This is the "Shell" that holds your dashboard and sidebar together
const DashboardLayout = () => (
  <div className="dashboard-wrapper">
    <Sidebar />
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* We can add /students and /courses here later */}
      </Routes>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* The first page users see is the Login */}
        <Route path="/" element={<Login />} />
        
        {/* Any URL starting with /dashboard uses the DashboardLayout */}
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;