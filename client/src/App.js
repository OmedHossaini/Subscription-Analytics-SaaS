import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/" exact>
          <h1>Welcome to Subscription Analytics SaaS</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
