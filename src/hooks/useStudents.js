import { useEffect, useState } from "react";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../services/studentService";

export default function useStudents() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Load students
  const loadStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // Add Student
  const handleAddStudent = async (student) => {
    await addStudent(student);
    loadStudents();
  };

  // Delete Student
  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  // Edit Student
  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  // Update Student
  const handleUpdateStudent = async (student) => {
    await updateStudent(student);
    setEditingStudent(null);
    loadStudents();
  };

  return {
    students,
    editingStudent,
    handleAddStudent,
    handleDeleteStudent,
    handleEditStudent,
    handleUpdateStudent,
  };
}