import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from "./components/Dashboad/Dashboard"
// import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/VideoHeroSection/HeroSection';
import ToDoList from './components/ToDoList/ToDoList';
import TodayNews from './components/Cards/TodayNews';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar />
                <HeroSection />
                <ToDoList />
                {/* <Dashboard /> */}
                <TodayNews />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
