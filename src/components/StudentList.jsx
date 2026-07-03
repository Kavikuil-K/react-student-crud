import StudentCard from "./StudentCard";

function StudentList({ students, onDelete, onEdit }) {
    return (
        <div>
            {students.map((student) => (
                <StudentCard
                    key={student.id}
                    student={student}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
}

export default StudentList;