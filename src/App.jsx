import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import './App.css';

import ProgramList from './pages/ProgramList';
import ProgramDetails from './pages/ProgramDetails';
import SubjectList from './pages/SubjectList';
import SubjectDetails from './pages/SubjectDetails';

// This is the "Shell" that holds your dashboard and sidebar together
const DashboardLayout = () => (
  <div className="dashboard-layout">
    <Sidebar />
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/programs" element={<ProgramList />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
        <Route path="/subjects" element={<SubjectList />} />
        <Route path="/subjects/:id" element={<SubjectDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  </div>
);

function App() {
  // Initialize dark mode on first load
  useEffect(() => {
    const darkModeStored = localStorage.getItem('darkMode');
    if (darkModeStored === 'true') {
      document.body.classList.add('dark-mode');
      document.documentElement.style.setProperty('--dark-mode', '1');
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;