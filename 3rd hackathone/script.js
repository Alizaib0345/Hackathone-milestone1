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
// Function to dynamically preview resume on input change
var updatePreview = function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var pictureInput = document.getElementById("picture");
    var previewData = {
        name: name,
        email: email,
        phone: phone,
        experience: experience,
        skills: skills,
        picture: pictureInput.files && pictureInput.files[0]
            ? URL.createObjectURL(pictureInput.files[0])
            : undefined,
    };
    generateResume(previewData);
};
// Function to generate resume dynamically
var generateResume = function (data) {
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = "\n        <div class=\"resume\" style=\"border: 1px solid #ddd; padding: 20px; border-radius: 10px;\">\n            ".concat(data.picture ? "<img src=\"".concat(data.picture, "\" alt=\"").concat(data.name, "'s Picture\" class=\"profile-pic\" style=\"width: 100px; height: 100px; border-radius: 50%;\">") : "", "\n            <h2>").concat(data.name || "Your Name", "</h2>\n            <p><strong>Email:</strong> ").concat(data.email || "example@example.com", "</p>\n            <p><strong>Phone:</strong> ").concat(data.phone || "123-456-7890", "</p>\n            <h3>Experience</h3>\n            <p>").concat(data.experience || "Write about your experience here.", "</p>\n            <h3>Skills</h3>\n            <p>").concat(data.skills || "List your skills here.", "</p>\n        </div>\n    ");
};
// Attach event listener to the form
var form = document.getElementById("resumeForm");
form.addEventListener("submit", handleFormSubmit);
// Add real-time preview event listeners
document.querySelectorAll("input, textarea").forEach(function (input) {
    input.addEventListener("input", updatePreview);
});
