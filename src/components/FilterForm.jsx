import axios from 'axios';
import React, { useState } from 'react'
import { BASE_API_URL } from '../utils/constants';
import Loader from './Loader';


const FilterForm = ({ setStudents }) => {

  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    // console.log("Filters applied:", filters);
    try {
      const res = await axios.get(`${BASE_API_URL}/search`, { params: filters });
      // console.log(res.data);
      setStudents(res.data);


    } catch (err) {
      console.error("Error fetching students:", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }

  }


  return (

    <>
      <form onSubmit={handleSubmit}>
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
          {loading ? "Loading..." : "Apply"}
        </button>

      </form>

      {
        loading && <Loader />
      }
    </>

  )
}

export default FilterForm