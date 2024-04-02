document.addEventListener("DOMContentLoaded", function() {

    const list = document.querySelector("#movie-list ul");
    const forms = document.querySelector("form");

    // Delete movies
    let deleteBtn = document.querySelectorAll(".delete")
    list.addEventListener("click", (event) => {
        if (event.target.className == "delete") {
            const li = event.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })

    // Add movies
    const addForm = forms["add-movie"];
    addForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;

        // Create element
        const li = document.createElement("li");
        const movieName = document.createElement("span");
        const deleteBtn = document.createElement("span");

        // Add text content
        movieName.textContent = value;
        deleteBtn.textContent = "delete";

        // Add classes
        movieName.classList.add("name");
        deleteBtn.classList.add("delete");

        // Append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    })
})
