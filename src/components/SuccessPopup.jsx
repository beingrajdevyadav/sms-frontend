import React from 'react'

const SuccessPopup = ({handleClick, message, data}) => {
    console.log(data);
  return (
    <div className='overlay'>
        <div className="success-popup">
            <h1>🎯 Success!</h1>
            <hr />
            <p>Student ID: {data._id}</p>
            <p>{message}</p>
            <button onClick={handleClick}>Ok</button>

        </div>
    </div>
  )
}

export default SuccessPopup