import axios from 'axios';
import React, { useState } from 'react'
import { BASE_API_URL } from '../utils/constants';

const DeleteForm = ({ data, setIsDeletable, setIsLoading, setIsSuccess }) => {

    const [str, setStr] = useState("");

    // handle submit
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);

        if (str.trim() !== data.name) {
            setIsLoading(false);
            return;
        }

        try {
            const res = await axios.delete(`${BASE_API_URL}/${data._id}`)
            console.log(res.data);


            setTimeout(() => {
                setIsDeletable(false);
                setIsLoading(false);
                setIsSuccess(true);
            }, 2000);
        } catch (error) {
            console.log("Deleting Error : ", error.message);
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="">Student Id : {data._id}</label>
                </div>
                <div className="form-control">
                    <label htmlFor="">Student Name : {data.name}</label>
                </div>
                <div className="form-control">
                    <label htmlFor="">Student Age : {data.age}</label>
                </div>
                <div className="form-control">
                    <label htmlFor=""> Student City : {data.city}</label>
                </div>
                <div className="form-control">
                    <label htmlFor=""> Student Course : {data.course}</label>
                </div>

                <div className="form-control">
                    <label htmlFor="">Type <b>{data.name}</b> To Delete! </label>
                    <input type="text" placeholder={data.name} value={str} onChange={(e) => setStr(e.target.value)} />
                </div>

                <div className="btn-controls">
                    <button type='button' className="bg-dark">Cancel</button>
                    <button type='submit' className='bg-red'>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default DeleteForm