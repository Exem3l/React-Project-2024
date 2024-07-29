import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const validateRegister = () => {
    if (username.length < 6) {
      setError('Username must be at least 6 characters long.');
      return false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
      return false;
    }

    if (!email.includes('@')) {
      setError('Email must contain "@" symbol.');
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    if (validateRegister()) {
      setError('');
      setMessage('Successfully registered!');
    }
  };

  return (
    <div className='Login'>
    <div className="auth-container">
      <h2>Register</h2>
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
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
      <button onClick={handleRegister}>Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
    </div>
  );
};

export default Register;
