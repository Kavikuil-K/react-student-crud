function StudentCard({ student, onDelete, onEdit }) {

    return (

        <div className="student-card">

            <h3>{student.name}</h3>

            <p>{student.email}</p>

            <p>{student.course}</p>

            <div className="buttons">

                <button onClick={() => onEdit(student)}>
    Edit
</button>

          <button
    onClick={() => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            onDelete(student.id);
        }
    }}
>
    Delete
</button>

            </div>

        </div>

    );

}

export default StudentCard;