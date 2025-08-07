import axios from 'axios';
import React, { useState } from 'react'
import { BASE_API_URL } from '../utils/constants';

const EditForm = ({ data, setData, setIsEditable, setIsLoading, setIsSuccess, }) => {

    const [studentData, setStudentData] = useState(data);

    // handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({ ...studentData, [name]: value });
    };

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.put(`${BASE_API_URL}/${data._id}`, studentData);
            setData(res.data);

            setTimeout(() => {
                setIsEditable(false);
                setIsLoading(false);
                setIsSuccess(true);
            }, 2000);

        } catch (error) {
            console.log("Student Editing Error : ", error.message);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="">Student Name : </label>
                    <input type="text" name='name' value={studentData.name} onChange={handleChange} placeholder='Enter Student Name' />
                </div>
                <div className="form-control">
                    <label htmlFor="">Student Age : </label>
                    <input type="text" name='age' value={studentData.age} onChange={handleChange} placeholder='Enter Student Age' />
                </div>
                <div className="form-control">
                    <label htmlFor="">Student City : </label>
                    <input type="text" name='city' value={studentData.city} onChange={handleChange} placeholder='Enter Student City' />
                </div>
                <div className="form-control">
                    <label htmlFor="">Student Course : </label>
                    <input type="text" name='course' value={studentData.course} onChange={handleChange} placeholder='Enter Student Course' />
                </div>


                <div className="btn-controls">
                    <button type="reset" className='bg-dark' onClick={() => setStudentData(data)}> <i className="fa-solid fa-arrow-rotate-left"></i> Reset</button>
                    <button type="submit" className='bg-green'><i className="fa-solid fa-file"></i> Edit & Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm