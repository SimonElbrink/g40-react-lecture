
import React from 'react';

const names = [
    "Mehrdad Javan",
    "Ulf Bengtsson ",
    "Simon Elbrink",
    "Erik Svensson",
];

const getLastName = (name) =>{
    let lastName = name.split(" ")[1];
    return <span>{lastName}</span>
}


const NameList = () => {

    return(
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
    )
};

export default NameList;