// Main function to handle form submission
var handleFormSubmit = function (event) {
    event.preventDefault();
    // Get form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var pictureInput = document.getElementById("picture");
    // Prepare resume data
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        experience: experience,
        skills: skills,
        picture: pictureInput.files && pictureInput.files[0]
            ? URL.createObjectURL(pictureInput.files[0])
            : undefined,
    };
    // Generate and display resume
    generateResume(resumeData);
};
// Function to generate resume dynamically
var generateResume = function (data) {
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = "\n        <div class=\"resume\">\n            ".concat(data.picture ? "<img src=\"".concat(data.picture, "\" alt=\"").concat(data.name, "'s Picture\" class=\"profile-pic\">") : "", "\n            <h2>").concat(data.name, "</h2>\n            <p><strong>Email:</strong> ").concat(data.email, "</p>\n            <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n            <h3>Experience</h3>\n            <p>").concat(data.experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(data.skills, "</p>\n        </div>\n    ");
};
// Attach event listener to the form
var form = document.getElementById("resumeForm");
form.addEventListener("submit", handleFormSubmit);
