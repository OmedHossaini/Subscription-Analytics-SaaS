import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        history.push('/login');
      }
    };
    getUser();
  }, [history]);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      history.push('/login');
    } catch (error) {
      console.log('error signing out', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>Welcome, {user.username}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
 
export default DashboardPage;
