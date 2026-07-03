# Frontend Architecture

The frontend follows a layered architecture to separate UI, business logic, and API communication.

```
App
 │
 ▼
StudentPage
 │
 ├───────────────┐
 │               │
 ▼               ▼
StudentForm   StudentList
                  │
                  ▼
             StudentCard

StudentPage
      │
      ▼
useStudents Hook
      │
      ▼
Student Service
      │
      ▼
Axios API
      │
      ▼
Node.js Backend
```

## Layer Responsibilities

### Components
Reusable UI components.

### Pages
Page-level components that assemble the UI.

### Hooks
Manage application state and CRUD operations.

### Services
Communicate with the backend API.

### API
Axios configuration for HTTP requests.

### Utils
Reusable utility functions such as validation.