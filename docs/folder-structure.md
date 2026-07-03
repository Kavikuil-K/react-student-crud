# Frontend Folder Structure

The frontend follows a layered architecture to separate concerns and improve maintainability.

```text
src
│
├── api
│   └── studentApi.js
│
├── components
│   ├── StudentCard.jsx
│   ├── StudentForm.jsx
│   └── StudentList.jsx
│
├── hooks
│   └── useStudents.js
│
├── pages
│   └── StudentPage.jsx
│
├── services
│   └── studentService.js
│
├── utils
│   └── validation.js
│
├── App.jsx
├── App.css
└── main.jsx
```

## Folder Responsibilities

### api
Contains the Axios instance used to communicate with the backend.

### components
Contains reusable UI components.

### hooks
Contains custom React hooks that manage application state and CRUD operations.

### pages
Contains page-level components responsible for assembling the UI.

### services
Contains API service functions that communicate with the backend.

### utils
Contains reusable utility functions such as form validation.

### App.jsx
The root component that renders the application.

### App.css
Contains the global styles for the application.

### main.jsx
Application entry point that mounts the React app.