import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import useStudents from "../hooks/useStudents";

function StudentPage() {

  const {
    students,
    editingStudent,
    handleAddStudent,
    handleDeleteStudent,
    handleEditStudent,
    handleUpdateStudent,
  } = useStudents();

  return (
    <div className="app">

      <h1>Student Management System</h1>

      <StudentForm
        onAddStudent={handleAddStudent}
        editingStudent={editingStudent}
        onUpdateStudent={handleUpdateStudent}
      />

      <StudentList
        students={students}
        onDelete={handleDeleteStudent}
        onEdit={handleEditStudent}
      />

    </div>
  );
}

export default StudentPage;