//import logo from './logo.svg';
import './App.css';
//import Nav from './components/Nav';
import Home from './components/Home';
import Plan from './components/Plan';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginSignup from './components/LoginSignup/LoginSignup';
import Login from './Login'
import Signups from './Signup'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path="/signup" element={<Signups />}></Route> 
            <Route path="/home" element={<Home />}></Route> 
            
            <Route path="/plan" element={<Plan />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;