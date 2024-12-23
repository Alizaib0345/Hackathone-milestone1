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

// Function to dynamically preview resume on input change
const updatePreview = (): void => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const pictureInput = document.getElementById("picture") as HTMLInputElement;

    const previewData: ResumeData = {
        name,
        email,
        phone,
        experience,
        skills,
        picture: pictureInput.files && pictureInput.files[0]
            ? URL.createObjectURL(pictureInput.files[0])
            : undefined,
    };

    generateResume(previewData);
};

// Function to generate resume dynamically
const generateResume = (data: ResumeData): void => {
    const resumeOutput = document.getElementById("resumeOutput")!;
    resumeOutput.innerHTML = `
        <div class="resume" style="border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
            ${data.picture ? `<img src="${data.picture}" alt="${data.name}'s Picture" class="profile-pic" style="width: 100px; height: 100px; border-radius: 50%;">` : ""}
            <h2>${data.name || "Your Name"}</h2>
            <p><strong>Email:</strong> ${data.email || "example@example.com"}</p>
            <p><strong>Phone:</strong> ${data.phone || "123-456-7890"}</p>
            <h3>Experience</h3>
            <p>${data.experience || "Write about your experience here."}</p>
            <h3>Skills</h3>
            <p>${data.skills || "List your skills here."}</p>
        </div>
    `;
};

// Attach event listener to the form
const form = document.getElementById("resumeForm") as HTMLFormElement;
form.addEventListener("submit", handleFormSubmit);

// Add real-time preview event listeners
document.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", updatePreview);
});
