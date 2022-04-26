import React from 'react';
import Table from '../4ex-table/Table';
import "./App.css"


const InLineStyling = () => {
    return(
        <>
        <h1 style={{color: "red"}} >Hello in Red</h1>
        <h3 style={{backgroundColor: "lightblue"}}>InlineStyling</h3>
        </>
    )
};

const CSSTableStyle = () => {
    return(
        <>
        <h3>Table</h3>
        <Table/>
        </>

    );
};


const StylingExamples = () => {
    return (
        <div>
            <InLineStyling/>
            <CSSTableStyle/>
        </div>
    );
};

export default StylingExamples;