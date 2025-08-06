import { useEffect, useState } from 'react';
import axios from 'axios';
import FilterForm from '../components/FilterForm';
import StudentTable from '../components/StudentTable';

function Home() {
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // to fe tch students

  const fetchStudents = async () => {
    try {
      const params = { ...query, page };
      const res = await axios.get("http://localhost:5000/students", { params });
      // console.log("Students Fetched : ", res.data);
      setStudents(res.data);
      setTotalPages(res.data.totalPages);

    } catch (error) {
      console.log("Error Fetching Students : ", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [query, page]);


  // handle filter
  const handleFilter = (filters)=>{
    setQuery(filters);
    setPage(1);
  };

  return (
    <>
      <h1>SMS</h1>
      <p>Student Management System</p>
      <hr />
      <FilterForm onFilter={handleFilter} />

      <StudentTable
      students={students}
      page={page}
      totalPages={totalPages}
      setPage={setPage}
      setQuery={setQuery}
      />
    </>
  )
}

export default Home
