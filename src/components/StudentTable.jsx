import React from 'react'

const StudentTable = ({ students, page, totalPages, setPage }) => {
  return (
    <div>
      <h2>Students</h2>
      <hr />

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
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
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.city}</td>
                  <td>{student.course}</td>
                  <td>{new Date(student.admissionDate).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={{ textAlign: "center" }} colSpan={5}>No students found</td>
              </tr>
            )
          }
        </tbody>
      </table>

      {/* Pagination  */}
      <div>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <p>Page {page} of {totalPages}</p>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  )
}

export default StudentTable