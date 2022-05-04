import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {

    const [dateTime, setDateTime] = useState("Default Date: Mon Oct 21 2020 20.20.20 GMT")

    const [reload, setReload] = useState(false);

    useEffect(() =>{
        console.log("UseEffect was executed!")
        const currentDateTime = new Date();
        setDateTime(currentDateTime.toString());
    },[reload]);

    const updateDateHandler = () =>{
        setReload(!reload);
    }



    return (
        <div className='container'>
            <h3>UseEffect Example</h3>

            <div className='alert alert-info'>{dateTime}</div>

            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-info' onClick={updateDateHandler}>Update Date</button>
                </div>
            </div>
        </div>
    );
};

export default UseEffectExample;