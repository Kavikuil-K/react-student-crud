export const validateStudent = (name, email, course) => {

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedCourse = course.trim();

    // Required fields
    if (!trimmedName || !trimmedEmail || !trimmedCourse) {
        return {
            valid: false,
            message: "Please fill all the fields."
        };
    }

    // Name validation
    if (trimmedName.length < 3) {
        return {
            valid: false,
            message: "Name should contain at least 3 characters."
        };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
        return {
            valid: false,
            message: "Please enter a valid email address."
        };
    }

    // Course validation
    if (trimmedCourse.length < 2) {
        return {
            valid: false,
            message: "Please enter a valid course name."
        };
    }

    return {
        valid: true
    };
};