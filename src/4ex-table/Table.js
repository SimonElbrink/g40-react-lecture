import React from 'react';

const TableHeader = () => {
    return(            
    <thead>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ACTION</th>
        </tr>
    </thead>
    );
}

const TableButton = () =>{
    return(
        <div>
            <button type='button'>Delete</button>
            <button type='button'>Edit</button>
        </div>

    );
}

const Table = () => {
    return (
        <table border=''>

            <TableHeader/>

            <tbody>
                <tr>
                    <td>100</td>
                    <td>Simon</td>
                    <td>
                        <TableButton/>
                    </td>
                </tr>
                <tr>
                    <td>200</td>
                    <td>Ulf</td>
                    <td>
                        <TableButton/>
                    </td>
                </tr>
                <tr>
                    <td>300</td>
                    <td>Mehrdad</td>
                    <td>
                        <TableButton/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;