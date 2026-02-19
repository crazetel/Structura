import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard'); 
  };

  return (
    <div className="main-screen">
      <div className="visual-side">
        <div className="brand-content">
          <h1>MINI ENROLLMENT SYSTEM<br/><span>using react by crezztell</span></h1>
          <p style={{ marginTop: '1rem', opacity: 0.9 }}>Innovating education for the next generation.</p>
        </div>
      </div>
      <div className="form-side">
        <div className="login-box">
          <h2 style={{ marginBottom: '10px', color: '#590d22' }}>Welcome back</h2>
          <p style={{ marginBottom: '30px', color: '#888' }}>Enter your credentials to continue</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            <button type="submit" className="submit-btn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;