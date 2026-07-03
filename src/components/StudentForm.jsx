import { useState, useEffect } from "react";
import { validateStudent } from "../utils/validation";

function StudentForm({
  onAddStudent,
  editingStudent,
  onUpdateStudent,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

 useEffect(() => {
  if (editingStudent) {
    setName(editingStudent.name);
    setEmail(editingStudent.email);
    setCourse(editingStudent.course);
  } else {
    setName("");
    setEmail("");
    setCourse("");
  }
}, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateStudent(name, email, course);

    if (!validation.valid) {
        alert(validation.message);
        return;
    }

    const student = {
    name: name.trim(),
    email: email.trim(),
    course: course.trim(),
};

if (editingStudent) {
    student.id = editingStudent.id;
}

    if (editingStudent) {
        onUpdateStudent(student);
    } else {
        onAddStudent(student);
    }

    setName("");
    setEmail("");
    setCourse("");
}; 

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;