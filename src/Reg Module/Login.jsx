import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const validateLogin = () => {
    if (username.length < 6) {
      setError('Username must be at least 6 characters long.');
      return false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    setUsername('');
    setPassword('');
    if (validateLogin()) {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      setMessage('Successfully Logined!');
      setError('');
    }
  };

  return (
    <div className='Login'>
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
    </div>
  );
};

export default Login;
