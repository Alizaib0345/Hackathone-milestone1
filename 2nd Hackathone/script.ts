// Define interface for resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    experience: string;
    skills: string;
    picture?: string;
}

// Main function to handle form submission
const handleFormSubmit = (event: Event): void => {
    event.preventDefault();

    // Get form elements
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const pictureInput = document.getElementById("picture") as HTMLInputElement;

    // Prepare resume data
    const resumeData: ResumeData = {
        name,
        email,
        phone,
        experience,
        skills,
        picture: pictureInput.files && pictureInput.files[0] 
            ? URL.createObjectURL(pictureInput.files[0]) 
            : undefined,
    };

    // Generate and display resume
    generateResume(resumeData);
};

// Function to generate resume dynamically
const generateResume = (data: ResumeData): void => {
    const resumeOutput = document.getElementById("resumeOutput")!;
    resumeOutput.innerHTML = `
        <div class="resume">
            ${data.picture ? `<img src="${data.picture}" alt="${data.name}'s Picture" class="profile-pic">` : ""}
            <h2>${data.name}</h2>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <h3>Experience</h3>
            <p>${data.experience}</p>
            <h3>Skills</h3>
            <p>${data.skills}</p>
        </div>
    `;
};

// Attach event listener to the form
const form = document.getElementById("resumeForm") as HTMLFormElement;
form.addEventListener("submit", handleFormSubmit);
