
import "../css/table.css"
import FilterForm from './FilterForm'


const StudentTable = ({ students, setStudents , setIsLoading}) => {

  return (
    <div className='student-table'>

      <h3>Student Management System</h3>
      <hr />

      <FilterForm setStudents={setStudents} setIsLoading={setIsLoading} />

      <table className='table' border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Course</th>
            <th>Admission Date</th>
          </tr>
        </thead>
        <tbody>
          {
            students?.length ? (
              students.map((student) => (
                <tr key={student._id}>
                  <td>{student._id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.city}</td>
                  <td>{student.course}</td>
                  <td>{new Date(student.admissionDate).toISOString().slice(0, 10)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={{ textAlign: "center" }} colSpan={6}>No students found</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable