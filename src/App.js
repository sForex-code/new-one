import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Heder from './Components/Heder';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import Uplode from './Components/Uplode';
import LoginPage from "./Components/Login"
import SignUp from "./Components/SignUp"
function App() {
  return (
    <Router>
      <Heder/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Upload' element={<Uplode/>} />
        <Route path='/Videos' element={<Videos/>} />
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/signUp' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
