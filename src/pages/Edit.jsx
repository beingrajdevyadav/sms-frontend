import React, { useState } from 'react'
import { BASE_API_URL } from '../utils/constants';
import axios from 'axios';
import Loader from '../components/Loader'
import SuccessPopup from '../components/SuccessPopup'
import EditForm from '../components/EditForm';
import { warnToast } from '../utils/toasts';



const Edit = () => {
  const [studentID, setStudentID] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [data, setData] = useState({});


  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!studentID){
      warnToast("Enter Student ID!");
      return;
    }

    if(studentID.length !== 24){
      warnToast("Invalid Student ID!");
      return;
    }
    
    setIsLoading(true);
    try {
      const res = await axios.get(`${BASE_API_URL}/${studentID}`);
      // console.log(res.data);

      setData(res.data);

      setTimeout(() => {
        setIsLoading(false);
        setStudentID('');
        setIsEditable(true);
      }, 2000);
    } catch (error) {
      console.log("Editing Error : ", error.message)
    }
  }
  return (

    <>
      <div className='create'>
        <h2>Edit Student Details</h2>
        <hr />

        {
          isEditable ? (<EditForm setIsEditable={setIsEditable} setData={setData} setIsLoading={setIsLoading} setIsSuccess={setIsSuccess} data={data} />) : (
            <form onSubmit={handleSubmit} >
              <div className="form-control">
                <label htmlFor="">Student ID : </label>
                <input type="text" placeholder='Enter Student ID' autoComplete='off' value={studentID} name='studentId' onChange={(e) => setStudentID(e.target.value)} />
              </div>

              <div className="btn-controls">
                <button type="reset" onClick={() => setStudentID('')} className='bg-dark'> <i className="fa-solid fa-arrow-rotate-left"></i> Reset</button>
                <button type="submit" className='bg-green'><i className="fa-solid fa-magnifying-glass"></i> Fetch Details</button>
              </div>
            </form>

          )
        }

      </div>
      {
        isloading && <Loader />
      }
      {
        isSuccess && <SuccessPopup data={data} message={"Updated Successfully!"} handleClick={() => setIsSuccess(false)} />
      }
    </>

  )
}

export default Edit