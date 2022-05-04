import React, { useState } from 'react';

const UseStateExample = () => {

    const initialValue = {firstName: '', lastName:''}

    const [person, setPerson] = useState(initialValue);

    const inputChangeFN = (e) =>{
        const value = e.target.value;
        // let _person = {firstName: value, lastName: person.lastName};
        let _person = {...person, firstName: value} // Makes a copy and Updated only the firstName
        setPerson(_person);
        console.log(person);
    }

    const inputChangeLN = (e) =>{
        const value = e.target.value;
        let _person = {...person, lastName: value};
        setPerson(_person);
    }




    return (

        <div className="container mt-5">
            <h3>UseState() Example</h3>
            <form className="form-control">
                <div className="mb-3">
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter First Name" onChange={inputChangeFN} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter Last Name" onChange={inputChangeLN}/>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-success">Validate!</button>
                </div>
            </form>
            <br />
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h4>Data</h4>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <span>FirstName: {person.firstName}</span>
                    </div>
                    <div className="mb-3">
                        <span>LastName: {person.lastName}</span>
                    </div>
                    <div className="mb-3">
                        <button type="button" className="btn btn-danger">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseStateExample;