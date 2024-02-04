//import logo from './logo.svg';
import './App.css';
//import Nav from './components/Nav';
import Home from './components/Home';
//import Tweet from './components/Tweet';
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
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;