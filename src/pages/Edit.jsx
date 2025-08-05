import React from 'react'

const Edit = () => {
  return (
     <div className='create'>
      <h2>Edit Student Details</h2>
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
        <button type="reset" className='bg-dark'> <i className="fa-solid fa-arrow-rotate-left"></i> Reset</button>
        <button type="submit" className='bg-green'><i className="fa-solid fa-plus"></i> Add Student</button>
      </div>
     </form>
    </div>
  )
} 

export default Edit