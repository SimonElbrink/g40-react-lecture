import React from 'react';
import ReactDOM from 'react-dom';
//import App from './1ex-class-component/App'
//import App from './2ex-Function-component/App'
//import App from './3ex-arrow-function/App'
//import Table from './4ex-table/Table'
//import StylingExamples from './5ex-css/StylingExamples';

import NameList from './6ex-variable-function/NameList'
import MenuList from './7ex-props/MenuList';


//const message = <h1>Hello Group 40!</h1>;

const listOfNames = [
    "Mehrdad Javan",
    "Ulf Bengtsson ",
    "Simon Elbrink",
    "Erik Svensson",
];

const headerTitle = "Hello Group 40";

// ReactDOM.render(
//     <NameList names={listOfNames} message={headerTitle}/>,
//     document.getElementById('lecture')
//     );

ReactDOM.render(<MenuList/>, document.getElementById("lecture"));