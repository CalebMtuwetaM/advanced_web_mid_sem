document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("validationForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const successMessage = document.getElementById("successMessage");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");

    function validateInput(input, regex, errorMessage, errorElement) {
        if (!regex.test(input.value)) {
            errorElement.textContent = errorMessage;
            input.style.border = "2px solid red";
            return false;
        } else {
            errorElement.textContent = "";
            input.style.border = "2px solid green";
            return true;
        }
    }

    fullName.addEventListener("input", function () {
        validateInput(fullName, /^[A-Za-z ]+$/, "Only alphabetic characters and spaces are allowed.", nameError);
    });

    email.addEventListener("input", function () {
        validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address.", emailError);
    });

    phone.addEventListener("input", function () {
        validateInput(phone, /^\d{10,15}$/, "Enter a valid phone number (10-15 digits).", phoneError);
    });

    password.addEventListener("input", function () {
        validateInput(password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, "Password must be at least 8 characters, including an uppercase letter, a lowercase letter, and a number.", passwordError);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const isValidName = validateInput(fullName, /^[A-Za-z ]+$/, "Only alphabetic characters and spaces are allowed.", nameError);
        const isValidEmail = validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address.", emailError);
        const isValidPhone = validateInput(phone, /^\d{10,15}$/, "Enter a valid phone number (10-15 digits).", phoneError);
        const isValidPassword = validateInput(password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, "Password must be at least 8 characters, including an uppercase letter, a lowercase letter, and a number.", passwordError);

        if (isValidName && isValidEmail && isValidPhone && isValidPassword) {
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.color = "green";
        } else {
            successMessage.textContent = "Please fix the errors before submitting.";
            successMessage.style.color = "red";
        }
    });
});
