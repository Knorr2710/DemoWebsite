const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "RMIT University",
      duration: "2023 - 2027 (expected)",
      description: ""
    },
    {
      degree: "High School Diploma",
      institution: "Vo Thi Sau High School",
      duration: "2019 - 2022",
      description: ""
    }
];

// Display the education
const eduDiv = document.getElementById("edu-output");

function displayEducation() {
    eduDiv.innerHTML = "";
    education.forEach((edu, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3 class="degree">${edu.degree}</h3>
            <p class="institution">${edu.institution}</p>
            <p class="duration">${edu.duration}</p>
            <p class="description">${edu.description}</p>
        `;
        div.classList.add("edu");
        eduDiv.appendChild(div);
    });
}

displayEducation();
