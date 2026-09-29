import React from 'react'
import './App.css'
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Authentication />} />
        </Routes>
      </AuthProvider>

      </Router>
    </div>
  )
}

export default App
