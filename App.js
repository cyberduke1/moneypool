import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Homepage from './Components/Homepage';
import CreateGroup from './Components/creategroup';






function App() {
  return (
    <Router>
    <main className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
        <Route path='/creategroup' element={<CreateGroup/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/joingroup' element={<Homepage/>}></Route>

        
        {/* <Route path='/' element={Profile}></Route> */}
      
      </Routes> 
    </main>
    </Router>
    
  );
}

export default App;
