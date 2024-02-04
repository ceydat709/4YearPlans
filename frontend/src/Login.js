import React, { useState, useEffect } from 'react';
import './components/LoginSignup/LoginSignup.css';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file
import laptop from './components/laptop.png';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const[errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email ===  "" &&  errors.password === ""){
            axios.post('http://localhost:8083/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/plan')
                } else {
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err));
        }
    }

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);      

      return (
        <div>
            {/* <hr></hr> */}
            <div className='container'>
                <hr></hr>
                <div>
                    <h2 id="Welcome" data-aos="fade-up">Welcome to FourEvYear</h2>
                </div>

                <div id="flexbox-container">
                    <p>
                        Welcome to FourEvYear, your ultimate companion for academic success at Columbia University! Effortlessly plan your educational journey for the next four years with our intuitive interface, designed to streamline your major requirements and make course planning a breeze.
                    </p>
                </div>

                <div className="features-container">
                    <div className="feature1"><b>Comprehensive Major Tracking:</b>
                        <br />Easily compile all courses for your major, ensuring a smooth four-year journey at Columbia.</div>
                    <div className="feature2"><b>Interactive:</b>
                    <br />Mark off completed courses and track your progress. Our interactive system keeps you organized and focused on your goals.</div>
                    <div className="feature3"><b>Stress-Free:</b>
                    <br />We aim to reduce the stress associated with academic planning, allowing you to focus on your well-being.</div>
                </div>


                <div className='bg-white p-3 rounded w-25' id="loginbox">
                    <h2 id="login">Log In</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='header'>
                            <label className='text' htmlFor="email" id="email"><strong>Email</strong></label>
                            <input type="email" placeholder='Enter Email' name='email'
                                onChange={handleInput} className='form-control rounded-0' />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>

                        <div className='header'>
                            <label className='text' htmlFor="password" id="password"><strong>Password</strong></label>
                            <input type="password" placeholder='Enter Password' name='password'
                                onChange={handleInput} className='form-control rounded-0' />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>
                        <button type='submit' className='btn btn-success w-100 rounded-0' id="loginbutton">Log In</button>
                        <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none' id="createaccount">Create Account</Link>

                        <img src={laptop} alt="Laptop" id="girl" />

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;