import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await Amplify.Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await Amplify.Auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <>
          <p>Welcome, {user.username}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Authentication failed.</p>
      )}
    </div>
  );
};

export default DashboardPage;
