import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BasicFormValidation = () => {

    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');

    const [errors, setErrors] = useState({ email: '', title: '' })

    const saveData = () => {

        const res = validate();

        if (res) {
            console.log(email + title);
        }

    }

    const validate = () => {

        let isValid = true;
        let _errors = { ...errors }

        if (email == '') {
            _errors.email = "Email Address is Required!"
            isValid = false;
        } else {
            _errors.email = "";
        }

        if (!title) {
            _errors.title = "Title is Required!"
            isValid = false;
        } else {
            _errors.title = "";
        }

        setErrors(_errors);
        return isValid;

    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <input type="text" name="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="col">
                    <input type="text" name="title" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Job Title" />
                    {errors.title && <span className="text-danger">{errors.title}</span>}
                </div>
                <div className="col">
                    <button type="button" className="btn btn-info" onClick={saveData}> Submit </button>
                </div>
            </div>
        </div>
    );
};


const HookFormValidation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const saveData = (data) => {
        console.log(data);
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit(saveData)}>
                <div className="row mt-3">
                    <div className="col">
                        <input type="text" {...register("email",{required: true})} name="email" className="form-control" placeholder="Enter Email" />

                        { errors.email && errors.email.type === "required" ? <span className="text-danger">Email is Required!</span> : <></> }
                        

                    </div>
                    <div className="col">
                        <input type="text" {...register("title", {required: true, minLength:2})} name="title" className="form-control" placeholder="Enter Job Title" />
                        
                        { errors.title && errors.title.type === "required" ? <span className="text-danger">Title is Required!</span> : <></> }

                        { errors.title && errors.title.type === "minLength" ? <span className="text-danger">Title is to short!</span> : <></> }


                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-info" >Submit</button>
                    </div>
                </div>
            </form>

        </div>
    );
}



const FormValidation = () => {
    return (
        <div>
            <HookFormValidation />
        </div>
    );
};

export default FormValidation;
