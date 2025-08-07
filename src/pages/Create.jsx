import React, { useState } from 'react'
import '../css/create.css'
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
import Loader from '../components/Loader';
import SuccessPopup from '../components/SuccessPopup';
import { warnToast } from '../utils/toasts';


const Create = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    city: "",
    course: "",
  });

  const [isloading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState({});

  // handle change 
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!student.name) {
      setIsLoading(false);
      warnToast("Enter Student Name!");
      return;

    }
    try {
      const res = await axios.post(`${BASE_API_URL}`, student);
      console.log(res.data);

      setStudent({
        name: "",
        age: "",
        city: "",
        course: "",
      });

      setTimeout(() => {
        setData(res.data);
        setIsLoading(false);
        setIsSuccess(true);
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <>
      <div className='create'>
        <h2>Add New Student </h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="">Student Name : </label>
            <input type="text" name='name' onChange={handleChange} value={student.name} autoComplete='off' placeholder='Enter Student Name' />
          </div>
          <div className="form-control">
            <label htmlFor="">Student Age : </label>
            <input type="text" name='age' onChange={handleChange} value={student.age} autoComplete='off' placeholder='Enter Student Age' />
          </div>
          <div className="form-control">
            <label htmlFor="">Student City : </label>
            <input type="text" name='city' onChange={handleChange} value={student.city} autoComplete='off' placeholder='Enter Student City' />
          </div>
          <div className="form-control">
            <label htmlFor="">Student Course : </label>
            <input type="text" name='course' onChange={handleChange} value={student.course} autoComplete='off' placeholder='Enter Student Course' />
          </div>


          <div className="btn-controls">
            <button type="reset" className='bg-dark'> <i className="fa-solid fa-arrow-rotate-left"></i> Reset</button>
            <button type="submit" className='bg-green'><i className="fa-solid fa-plus"></i> Add Student</button>
          </div>
        </form>
      </div>

      {
        isloading && <Loader />
      }
      {
        isSuccess && <SuccessPopup handleClick={() => setIsSuccess(false)} data={data} message={"Congratulations! 🎉 Student Added Successfully!"} />
      }
    </>

  )
}

export default Create