import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Tournaments from './components/pages/Tournaments';
import Players from './components/pages/Players';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
      <Router>
        <Navbar>Tennis</Navbar>
        
        <Routes>
        <Route path="/home" element={ <Home/> }/>    
        <Route path="/tournaments" element={ <Tournaments/> }/> 
        <Route path="/players" element={ <Players/> }/> 
        <Route path="/sign-up" element={ <SignUp/> }/> 

        </Routes>
      </Router>
    </>
  );
}

export default App;
