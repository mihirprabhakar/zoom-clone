import React from 'react'
import './App.css'
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import HomeComponent from './pages/home';
import History from './pages/history';

import { AuthProvider } from './contexts/AuthContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VideoMeet from './pages/VideoMeet';
const App = () => {
  return (
    <div>
      <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/home' element={< HomeComponent/>} />
          <Route path='/history' element={<History />} />
          <Route path='/:url' element={<VideoMeet />} />

          
        </Routes>
      </AuthProvider>

      </Router>
    </div>
  )
}

export default App
