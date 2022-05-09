import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//import App from './1ex-class-component/App'
//import App from './2ex-Function-component/App'
//import App from './3ex-arrow-function/App'
//import Table from './4ex-table/Table'
//import StylingExamples from './5ex-css/StylingExamples';
// import NameList from './6ex-variable-function/NameList'
// import MenuList from './7ex-props/MenuList';
// import Car from './8ex-state/Car';

// import Counter from './9ex-events/Counter';
// import TextChange from './9ex-events/TextChange';
// import LifeCycleMethodsInReact from './10ex-hooks/LifeCycleMethodsInReact';
// import UseStateExample from './10ex-hooks/UseStateExample';
// import UseEffectExample from './10ex-hooks/UseEffectExample';

// import FormValidation from './10ex-hooks/FormValidation';
// import AxiosExample from './11ex-axios/AxiosExample';

import RouterExampleV6 from './12ex-router/RouterExampleV6';



//const message = <h1>Hello Group 40!</h1>;

// const listOfNames = [
//     "Mehrdad Javan",
//     "Ulf Bengtsson ",
//     "Simon Elbrink",
//     "Erik Svensson",
// ];

//const headerTitle = "Hello Group 40";

// ReactDOM.render(
//     <NameList names={listOfNames} message={headerTitle}/>,
//     document.getElementById('lecture')
//     );

ReactDOM.render(<RouterExampleV6 />, document.getElementById("lecture"));