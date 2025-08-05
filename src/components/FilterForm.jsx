import React, { useState } from 'react'

const FilterForm = ({onFilter}) => {
  const [filters, setFilters] =useState({
    name: "",
    city: "",
    course:"",
    minAge: "",
    maxAge: "",
    sortBy: "name",
    sortOrder: "asc",
  });


  // handle filter change
  const handleChange = (e)=>{
    setFilters({
      ...filters,
      [e.target.name]:e.target.value
    });
  }


    // handle fiter submit
    const handleSubmit = (e)=>{
      e.preventDefault();
      onFilter(filters);
    }


  return (
   <form onSubmit={handleSubmit}>
    <input type="text" autoComplete='off'  placeholder='Enter Name' name='name' onChange={handleChange} />
    <input type="text" autoComplete='off'  placeholder='Enter City' name='city' onChange={handleChange} />
    <input type="text" autoComplete='off'  placeholder='Enter Course' name='course' onChange={handleChange} />
    <input type="number" autoComplete='off'  name='minAge' placeholder='Min Age' onChange={handleChange} />
    <input type="number" autoComplete='off'  name='maxAge' placeholder='Max Age' onChange={handleChange} />
   

   <select name="sortBy" onChange={handleChange}>
    <option value="name">Sort By Name</option>
    <option value="age">Sort By Age</option>
    <option value="admissionDate">By Admission Date</option>
   </select>
   
   <select name="sortOrder" onChange={handleChange}>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
   </select>

   <button type='submit'>Apply</button>
   </form>

  
  )
}
 
export default FilterForm