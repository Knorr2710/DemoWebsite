const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "RMIT University",
      duration: "2023 - 2027 (expected)",
      description: "Currently pursuing minor in Enterprise Development.<br>I am passionate about software development and always eager to learn new things."
    },
    {
      degree: "High School Diploma",
      institution: "Vo Thi Sau High School",
      duration: "2019 - 2022",
      description: "Graduated with a GPA of 8.0/10.<br>Participated in various extracurricular activities and competitions."
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
