import axios from 'axios';
import React, { useState } from 'react'
import { BASE_API_URL } from '../utils/constants';

const DeleteForm = ({data,  setIsDeletable, setIsLoading, setIsSuccess}) => {
 
const [isDeleting, setIsDeleting] = useState(false);
 
// handle submit
const handleSubmit = async (e){
    e.preventDefault();
setIsLoading(true);

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
    <div>DeleteForm</div>
  )
}

export default DeleteForm