import axios from 'axios';
import React, { useState } from 'react'
import { BASE_API_URL } from '../utils/constants';
import '../css/filter-form.css'


const FilterForm = ({ setStudents, setIsLoading }) => {
  const [filters, setFilters] = useState({
    name: "",
    city: "",
    course: "",
    minAge: "",
    maxAge: "",
    sortBy: "name",
    sortOrder: "asc",
  });


  // handle filter change
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  }


  // handle fiter submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log("Filters applied:", filters);
    try {
      const res = await axios.get(`${BASE_API_URL}/search`, { params: filters });
      // console.log(res.data);
      setStudents(res.data);

    } catch (err) {
      console.error("Error fetching students:", err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

  }


  return (

    <>
      <form onSubmit={handleSubmit} className='filter-form'>
        <input type="text" autoComplete='off' placeholder='Enter Name' name='name' onChange={handleChange} />
        <input type="text" autoComplete='off' placeholder='Enter City' name='city' onChange={handleChange} />
        <input type="text" autoComplete='off' placeholder='Enter Course' name='course' onChange={handleChange} />
        <input type="number" autoComplete='off' name='minAge' placeholder='Min Age' onChange={handleChange} />
        <input type="number" autoComplete='off' name='maxAge' placeholder='Max Age' onChange={handleChange} />


        <select name="sortBy" onChange={handleChange}>
          <option value="name">Sort By Name</option>
          <option value="age">Sort By Age</option>
          <option value="admissionDate">By Admission Date</option>
        </select>

        <select name="sortOrder" onChange={handleChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <button type="submit">
         <i className="fa-solid fa-magnifying-glass"></i>  Apply Filters
        </button>

      </form>

     
    </>

  )
}

export default FilterForm