import React, { useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:8080/api/v1/person/";

const AxiosExample = () => {


    const [people, setPeople] = useState([]);
    const [message, setMessage] = useState();
    const [error, setError] = useState();

    const [id, setId] = useState();


    const sendGetRequest = async () => {

        await axios.get(URL)
        .then((res) =>{
            console.log(res);

            setPeople(res.data)

            if(res.status === 200){
                setMessage("Operation Was Successfully Executed!")
            }else{
                setError("API Error Code: ", res.status)
            }
            setError();
        })
        .catch((er) => {
            console.log("ERROR: ", er);
            if(er.message){
                setError(er.message);
            }else{
                setError(er);
            }
            setMessage();
        })

    }

    const sendGetByIDRequest = async () =>{
        

        await axios.get(URL + id)
        .then((response) => {
            console.log(response);

            if(response.status == 200) {
                setMessage("Operation Done!")

                setPeople(response.data);
            }else{
                setError("operation has Failed! Error: ", response.status)
            }

            setError();
        })
        .catch((er) => {
            console.log("ERROR: ", er);
            if(er.message){
                setError(er.message);
            }else{
                setError(er);
            }
            setMessage();
        })

    };


    const sendPostRequest = async () => {

        const data = { firstName: "Åsa", lastName: "Jonsson", email: "asa.jonsson1@lexicon.se", title: ".Net Teacher"
        }

        await axios.post(URL, data)
        .then((response) => {
            console.log(response);

            if(response.status == 201) {
                setMessage("Operation Done: Added!")

                setPeople(response.data);
            }else{
                setError("operation has Failed! Error: ", response.status)
            }
            setError();
        })
        .catch((er) => {
            console.log("ERROR: ", er);
            if(er.message){
                setError(er.message);
            }else{
                setError(er);
            }
            setMessage();
        })

    }

    const sendPutRequest = async () => {

        const data = { id:2,
             firstName: "Test!",
              lastName: "Testsson",
               email: "test.testsson@test.se",
                title: "Tester!"
    }

            await axios.put(URL, data)
            .then((response) => {
                console.log(response);
    
                if(response.status == 204) {
                    setMessage("Operation Done: Updated!")
    
                    setPeople(response.data);
                }else{
                    setError("operation has Failed! Error: ", response.status)
                }
                setError();
            })
            .catch((er) => {
                console.log("ERROR: ", er);
                if(er.message){
                    setError(er.message);
                }else{
                    setError(er);
                }
                setMessage();
            })
    }

    const sendDeleteRequest = async () =>{

        await axios.delete(URL + id);

        console.log("Deleted Perosn with id:", id);
    }

    return (
        <div className='container'>
            <h3>Axios Example!</h3>

            {message && <div className='alert alert-success'>{message}</div>}
            {error && <div className='alert alert-danger'>{error}</div>}

            <button className='btn btn-info' onClick={sendGetRequest}>Fetch All Data From API</button>

            <button className='btn btn-info' onClick={sendGetByIDRequest}>Fetch By ID From API</button>

            <input className='form-control' type="text" name="id" id="findByID" onChange={(e)=> setId(e.target.value)}/>

            <h1>ID: {id}</h1>

            <button className='btn btn-warning' onClick={sendPostRequest}>Post to API</button>
            <button className='btn btn-warning' onClick={sendPutRequest}>Put to API</button>

            <button className='btn btn-danger' onClick={sendDeleteRequest}>Delete</button>
            


        </div>
    );
};

export default AxiosExample;