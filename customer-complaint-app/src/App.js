import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComplaintList from './components/ComplaintList';
import ComplaintForm from './components/ComplaintForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComplaintList />} />
        <Route path="/edit/:id" element={<ComplaintForm />} />
        <Route path="/upload" element={<ComplaintForm />} />
      </Routes>
    </Router>
  );
}

export default App;