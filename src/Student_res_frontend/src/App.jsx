import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './First';
import Admin from './Admin';
import Student from './Student';
import SignUp from './SignUp.jsx';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignUp />} />
        <Route path="/First" element={<First />} />
        <Route path="/student" element={<Student />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
    // <SignUp />
    
  );
}
export default App;
