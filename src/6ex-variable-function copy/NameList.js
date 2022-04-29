
import React from 'react';



const getLastName = (name) => {
    let lastName = name.split(" ")[1];
    return <span>{lastName}</span>
}


const Header = (props) => {
    return <h1>{props.message}</h1>
}


const NameList = (props) => {

    const names = props.names;
    return (
        <>
            <Header message={props.message} />
            <ul>
                {
                    names.map(
                        (name) => (

                            <li>
                                {name} -- {name.toUpperCase()} -- {getLastName(name)}
                            </li>
                        )
                    )
                }

            </ul>
        </>
    )
};

export default NameList;