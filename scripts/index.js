const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("contact");

form.addEventListener("submit", (e) => {
    // Validate form
    e.preventDefault();
    if (name.value === "" || email.value === "" || message.value === "") {
        alert("Please fill in all fields");
    } else {
        alert("Form submitted successfully");
    }
});