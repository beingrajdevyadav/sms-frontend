import { useEffect, useState } from 'react';
import axios from 'axios';
import StudentTable from '../components/StudentTable';
import { BASE_API_URL } from '../utils/constants';
import Loader from '../components/Loader';

function Home() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // to fetch students

  const fetchStudents = async () => {
   
    setStudents([]);
    try {
      const res = await axios.get(`${BASE_API_URL}`);
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
        setStudents={setStudents}
        students={students}
        setIsLoading={setIsLoading}
      />

      {
        isLoading && <Loader />
      }
    </>
  )
}

export default Home
