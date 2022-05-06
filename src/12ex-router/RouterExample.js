import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const RouterExample = () => {
    return (
        <div className='container'>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
};

const Header = () => {

    return (
        <ul className='nav nav-pills nav-fill bg-dark text-white'>
            <li className='nav-item'>
                <Link className='nav-link' to="/">Welcome</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/home">Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/register">Register</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/about">About</Link>
            </li>
        </ul>
    )
}


const Home = () => {
    return (
        <h3>Home</h3>
    )
}

const Welcome = () => <h3>Welcome</h3>

const About = () => {
    return (
        <Fragment>
            About
        </Fragment>
    )
}

const Register = () => {
    return (
        <Fragment>
            Register
        </Fragment>
    )
}

export default RouterExample;