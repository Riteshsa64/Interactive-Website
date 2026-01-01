// Variable
let skills = ["HTML", "CSS", "Learning JavaScript"];

// Function to greet user
function greetUser() {
    let name = document.getElementById("nameInput").value;

    if (name === "") {
        alert("Please enter your name!");
    } else {
        document.getElementById("title").innerText =
            "Welcome, " + name + " 👋";
    }
}

// Function using loop
function showSkills() {
    let list = document.getElementById("skillList");
    list.innerHTML = ""; // clear list

    for (let i = 0; i < skills.length; i++) {
        let li = document.createElement("li");
        li.innerText = skills[i];
        list.appendChild(li);
    }
}