import React from 'react'

const SuccessPopup = ({handleClick, message, id}) => {
  return (
    <div className='overlay'>
        <div className="success-popup">
            <h2>🎯 Success!</h2>
            <hr />
            <p>Student ID: {id}</p>
            <p>{message}</p>
            <button onClick={handleClick}>Ok</button>

        </div>
    </div>
  )
}

export default SuccessPopup