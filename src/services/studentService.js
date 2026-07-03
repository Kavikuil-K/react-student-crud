import API from "../api/studentApi";

export const getStudents = async () => {
    return await API.get("/students");
};

export const addStudent = async (student) => {
    return await API.post("/students", student);
};

export const updateStudent = async (student) => {
    return await API.put(`/students/${student.id}`, student);
};

export const deleteStudent = async (id) => {
    return await API.delete(`/students/${id}`);
};