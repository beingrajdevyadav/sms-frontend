import { useEffect, useState } from 'react';
import axios from 'axios';
import StudentTable from '../components/StudentTable';

function Home() {
  const [students, setStudents] = useState([]);
  

  // to fe tch students

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/students");
      // console.log("Students Fetched : ", res.data);
      setStudents(res.data);
      

    } catch (error) {
      console.log("Error Fetching Students : ", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);


 

  return (
    <>
      <StudentTable
      students={students}
      />
    </>
  )
}

export default Home
