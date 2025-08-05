import React from 'react'

const Create = () => {
  return (
    <div>
      <h2>Add New Student </h2>
     <hr />

     <form >
      <div className="form-control">
        <label htmlFor="">Student Name : </label>
        <input type="text" placeholder='Enter Student Name' />
      </div>
      <div className="form-control">
        <label htmlFor="">Student Age : </label>
        <input type="text" placeholder='Enter Student Age' />
      </div>
      <div className="form-control">
        <label htmlFor="">Student City : </label>
        <input type="text" placeholder='Enter Student City' />
      </div>
      <div className="form-control">
        <label htmlFor="">Student Course : </label>
        <input type="text" placeholder='Enter Student Course' />
      </div>
      

      <div className="btn-controls">
        <button type="reset">Reset</button>
        <button type="submit">Add Student</button>
      </div>
     </form>
    </div>
  )
} 

export default Create