import React, { useState } from 'react'
import { BASE_API_URL } from '../utils/constants'
import axios from 'axios'
import Loader from '../components/Loader'
import SuccessPopup from '../components/SuccessPopup'
import DeleteForm from '../components/DeleteForm'



const Delete = () => {
  const [studentId, setStudentId] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)
  const [isDeletable, setIsDeletable] = useState(false);
  const [data, setData] = useState({});

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const res = await axios.get(`${BASE_API_URL}/${studentId}`);
      setData(res.data);

      setTimeout(() => {
        setIsLoading(false);
        setStudentId('');
        setIsDeletable(true);
      }, 2000);
    } catch (error) {
      console.log("Data Fetching Error : ", error.message);
    }
  }
  return (

    <>
      <div className='create'>
        <h2>Delete Student Details </h2>
        <hr />


        {
          isDeletable ? (
            <DeleteForm data={data} setIsSuccess={setIsSuccess} setIsLoading={setIsLoading} setIsDeletable={setIsDeletable} />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="">Student ID : </label>
                <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder='Enter Student Id' />
              </div>

              <div className="btn-controls">
                <button type="reset" onClick={() => setStudentId('')} className='bg-dark'> <i className="fa-solid fa-arrow-rotate-left"></i> Reset</button>
                <button type="submit" className='bg-green'><i className="fa-solid fa-plus"></i> Add Student</button>
              </div>
            </form>
          )
        }

      </div>

      {
        isloading && <Loader />
      }
      {
        isSuccess && <SuccessPopup data={data} message={"Deleted Successfully!"} handleClick={() => setIsSuccess(false)} />
      }
    </>

  )
}

export default Delete