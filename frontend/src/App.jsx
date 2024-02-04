//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweet />} />
          </Routes>
      </div>
    </Router>
      <div className="header">
        <h1>FourEvYear</h1>
      </div>

      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Sign Up</a>
        <a href="#">Contact</a>
        <a href="#" className="right">Login</a>
      </div>

      <div className="row">
        <div className="side">
          <h2>Misson</h2>
          <p>Creating a website focused on enhancing the mental health of students by assisting them in developing a four-year plan is a meaningful initiative. This platform aims to provide a comprehensive and user-friendly environment where students can strategically plan their academic journey. By offering tools for course selection, goal-setting, and time management, the website empowers students to make informed decisions about their education, reducing stress and promoting a healthier mental well-being. Through personalized guidance and resources, the platform strives to foster a positive and supportive environment, helping students navigate the challenges of academic life and ultimately contribute to their long-term success and happiness.</p>

          <h2>Meet the Team</h2>
          <p> Front-End: </p>

          <p> Meryem Khadrouni:  </p>
          <div className="fakeimg2" style={{ height: '200px' }}></div>

          <p> Nicole Pi:  </p>
          <div className="fakeimg3" style={{ height: '200px' }}></div>

          <p> Back-End: </p>

          <p> Ceyda Topcu:  </p>
          <div className="fakeimg4" style={{ height: '200px' }}></div>

          <p> Savannah Lyles: </p>
          <div className="fakeimg5" style={{ height: '200px' }}></div>




          
        </div>
        <div className="main">
          <h2>Step 1</h2>
          <h5>Create An Account</h5>
          <div className="fakeimg1" style={{ height: '200px' }}>Image</div>
          <p>In more detail: </p>
          <p>In this step, you will input all the important inforation to ensure that you recieve the correct four year plan. If not, then you can regenrate! It really is that easy :D </p>
          <br />
          <h2>Step 2</h2>
          <h5>Get A Four Year Plan!</h5>
          <div className="fakeimg" style={{ height: '200px' }}>Image</div>
          <p>In more detail: </p>
          <p>In this step, you will see your website! </p>
        </div>
      </div>

      <div className="footer">
        <h2>FOUREVYEAR</h2>
      </div>
    </>
  );
}

export default App;