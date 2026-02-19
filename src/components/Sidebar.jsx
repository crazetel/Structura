import { Users, BookOpen, LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo" style={{ marginBottom: '3rem' }}>
      <h2 style={{ color: '#ff4d6d', fontSize: '1.5rem', fontWeight: '800' }}>UniPanel</h2>
    </div>
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
      <Link to="/dashboard" className="nav-link"><LayoutDashboard size={18}/> Overview</Link>
      <Link to="/dashboard/students" className="nav-link"><Users size={18}/> Students</Link>
      <Link to="/dashboard/courses" className="nav-link"><BookOpen size={18}/> Courses</Link>
      <Link to="/dashboard/reports" className="nav-link"><FileText size={18}/> Reports</Link>
      <Link to="/dashboard/settings" className="nav-link"><Settings size={18}/> Settings</Link>
    </nav>
    <Link to="/" className="nav-link" style={{ marginTop: 'auto', color: '#888' }}>
      <LogOut size={18}/> Logout
    </Link>
  </div>
);

export default Sidebar;