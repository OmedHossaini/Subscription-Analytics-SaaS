import React, { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

// Configure Amplify
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // Replaces useHistory

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      navigate('/login'); // Replaces history.push
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};


export default SignUpPage;