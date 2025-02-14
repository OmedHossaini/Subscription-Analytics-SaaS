import React, { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

// Configure Amplify (Ensure your aws-exports.js file is correctly set up)
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Replaces useHistory

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await Auth.signIn(email, password);
      navigate('/dashboard'); // Replaces history.push
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
