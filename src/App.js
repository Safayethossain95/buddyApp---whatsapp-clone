import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage';
import OtherPage from './pages/otherPageExample/OtherPage';
const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/other" element={<OtherPage />} /> 
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App