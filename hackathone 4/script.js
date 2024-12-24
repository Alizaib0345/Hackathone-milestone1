var _a;
// Function to handle resume form submission
var handleFormSubmit = function (event) {
    var _a;
    event.preventDefault(); // Stop default form submission
    // Get form data
    var form = document.getElementById("resumeForm");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
    var resumeData = { name: name, email: email, phone: phone, experience: experience, skills: skills, picture: picture };
    // Generate resume
    generateResume(resumeData);
};
// Function to generate resume content
var generateResume = function (data) {
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = ""; // Clear previous output
    // Add picture if available
    if (data.picture) {
        var img_1 = document.createElement("img");
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            img_1.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            img_1.alt = "Profile Picture";
            img_1.style.width = "150px";
            img_1.style.height = "150px";
            img_1.style.borderRadius = "50%";
            resumeOutput.appendChild(img_1);
        };
        reader.readAsDataURL(data.picture);
    }
    // Add other details
    var content = "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n    ");
    resumeOutput.innerHTML += content;
    // Apply styling to the output
    resumeOutput.style.maxWidth = "600px";
    resumeOutput.style.margin = "auto";
    resumeOutput.style.padding = "20px";
    resumeOutput.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    resumeOutput.style.border = "2px solid green";
    resumeOutput.style.borderRadius = "8px";
    resumeOutput.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
};
// Attach event listener
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", handleFormSubmit);
