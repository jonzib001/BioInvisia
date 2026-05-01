import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ResearcherDashboard from './ResearcherDashboard';
import UserDashboard from './UserDashboard';
import Forum from './Forum';
import NewObservation from './NewObservation';
import ThreadDetail from './ThreadDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/researcher-dashboard" element={<ResearcherDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/NewObservation" element={<NewObservation />} />
        <Route path="/ThreadDetail/:id" element={<ThreadDetail />} />
      </Routes>
    </Router>
  );
}

export default App;