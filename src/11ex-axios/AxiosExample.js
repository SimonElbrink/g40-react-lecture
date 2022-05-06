import React, { useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:8080/api/v1/person/";

const AxiosExample = () => {


    const [people, setPeople] = useState([]);
    const [message, setMessage] = useState();
    const [error, setError] = useState();

    const [id, setId] = useState();


    //Find All
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

    //Find By Id
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


    //Create / Post
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

    //Update / Put
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

    //Delete By ID
    const sendDeleteRequest = async () =>{

        await axios.delete(URL + id)
        .then((response) => {
            console.log(response);

            if(response.status == 204) {
                setMessage("Operation Done: Deleted!")

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

    //Returning Component
    return (
        <div className='container'>
            <h3>Axios Example!</h3>

            {message && <div className='alert alert-success'>{message}</div>}
            {error && <div className='alert alert-danger'>{error}</div>}

            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-info" onClick={sendGetRequest}>Get All person Data From API</button>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-3">
                    <button type="button" className="btn btn-primary" onClick={sendGetByIDRequest}>Get By Id</button>
                </div>
                <div className="col-3">
                    <input className='form-control' type="text" name="id" id="findByID" onChange={(e)=> setId(e.target.value)}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-success" onClick={sendPostRequest}>Post Data To API</button>
                </div>
            </div>  
            <br/>
            <div className="row">
                <div className="col">
                <button type="button" className="btn btn-warning" onClick={sendPutRequest}>Put Data To API</button>
                </div>
            </div>

            <br/>
            <div className="row">
                <div className="col">
                <button className='btn btn-danger' onClick={sendDeleteRequest}>Delete Data From API</button>
                </div>
            </div>
        </div>
    );
};

export default AxiosExample;