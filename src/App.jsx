import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // to fetch students

  const fetchStudents = async () => {
    try {
      const params = { ...query, page };
      const res = await axios.get("http://localhost:5000/students", { params });
      setStudents(res.data.students);
      setTotalPages(res.data.totalPages);

    } catch (error) {
      console.log("Error Fetching Students : ", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [query, page]);

  return (
    <>
      <h1>Heloo, World</h1>
    </>
  )
}

export default App
