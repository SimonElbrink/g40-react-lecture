import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams, Redirect} from "react-router-dom";

const RouterExampleV5 = () => {

    return (
        <div className="container">
            <Router>
                <Header />
                <Switch>
                    {/* 
                    The exact param is responsible to disable the partial matching for a route
                    It means we can be sure that it only returns the route if the path is EXACT match to the current url
                    */}
                    <Route exact path="/" component={Welcome} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" >
                        <About />
                    </Route>
                   

                    <Route path="/register" component={Register} />

                    <Redirect from="/person/:id" to="/data/:id"/>
                    <Route path={"/data/:id"} component={ShowData} />

                    <Route path={"/error"} component={ErrorPage} />


                </Switch>
            </Router>
        </div>
    );
};

const Header = () => {
    return(
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

    const history = useHistory();
    const location = useLocation();

    console.log("UseHistory", history);
    console.log(location)

    return (
        <Fragment>
            <h3>Home</h3>
            <button className='btn btn-outline-danger' onClick={() => history.goBack()}>Back</button>
            <button className='btn btn-outline-primary' onClick={() => history.push("/about")}>Redirect to About Page</button>
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

    const history = useHistory();
    const [id, setId] = useState();


    const redirectToData = () => {
        history.push("/data/"+ id)
    }

    return (
        <Fragment>
            <div className='row'>
                <div className='col'>
                    <input type="text" name="id" placeholder="Enter Id" onChange={(e) => {setId(e.target.value)}} />
                </div>
                <div className='col'>
                    <button className='btn btn-info' onClick={redirectToData}>Submit</button>
                </div>
            </div>
        </Fragment>
    )
}

const ShowData = () =>{

    let params = useParams();

    const location = useLocation();

    console.log("ShowData: ", location)


    console.log("Params in ShowData component: ", params)


    if(params.id == 0 || params.id == "undefined" ){
        return(
            <Redirect to={{
                pathname: "/error",
                state: {message: "Param is not Valid",
                path: location.pathname
            }
            }}
            />
        )
    }


    return(
        <h3>Id Was: {params.id}</h3>
    )


}

const ErrorPage = () => {

    const location = useLocation();

    console.log("location in errorPage: ",location);

    return(
        <div>
            Error at Page! : {location.state.message}
            <br/>
            Error Path  : {location.state.path}
        </div>
    )
}


export default RouterExampleV5;