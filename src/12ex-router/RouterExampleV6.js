import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate, useLocation, useParams } from "react-router-dom";

//npm install react-router-dom@6.3.0
const RouterExampleV6 = () => {

    return (
        <div className="container">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="register" element={<Register />} />
                    <Route path={"data/:id"} element={<ShowData />} />
                    <Route path={"error"} element={<ErrorPage />} />
                    <Route path={"*"} element={<Navigate replace to={"/error"} state={{message: "Path not available"}}/>} />
                </Routes>
            </Router>
        </div>
    );
};

const Header = () => {
    return (
        <Fragment>
            <ul className="nav nav-pills nav-fill bg-dark text-white">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Welcome</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
            </ul>
        </Fragment>
    );
}


const Home = () => {

    const navigate = useNavigate();
    const location = useLocation();

    console.log("useNavigate", navigate);
    console.log(location)

    return (
        <Fragment>
            <h3>Home</h3>
            <button className='btn btn-outline-danger' onClick={() => navigate(-1)}>Back</button>
            <button className='btn btn-outline-primary' onClick={() => navigate("/about")}>Redirect to About Page</button>
        </Fragment>
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

    const navigate = useNavigate();
    const [id, setId] = useState();


    const redirectToData = () => {
        navigate("/data/" + id)
    }

    return (
        <Fragment>
            <div className='row'>
                <div className='col'>
                    <input type="text" name="id" placeholder="Enter Id" onChange={(e) => { setId(e.target.value) }} />
                </div>
                <div className='col'>
                    <button className='btn btn-info' onClick={redirectToData}>Submit</button>
                </div>
            </div>
        </Fragment>
    )
}

const ShowData = () => {

    let params = useParams();

    const location = useLocation();

    console.log("ShowData: ", location)


    console.log("Params in ShowData component: ", params)


    if (params.id == 0 || params.id === "undefined") {
        return (
            <Navigate replace to={"/error"} state={{message: "Param is not Valid"}}/>
        )
    }


    return (
        <h3>Id Was: {params.id}</h3>
    )


}

const ErrorPage = () => {

    const location = useLocation();


    console.log("location in errorPage: ", location);

    return (
        <div>
            Error at Message: <b>{location.state.message}</b>
        </div>
    )
}


export default RouterExampleV6;