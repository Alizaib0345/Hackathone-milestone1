// Interface for form data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    experience: string;
    skills: string;
    picture?: File;
}

// Function to handle resume form submission
const handleFormSubmit = (event: SubmitEvent): void => {
    event.preventDefault(); // Stop default form submission

    // Get form data
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const picture = (document.getElementById("picture") as HTMLInputElement).files?.[0];

    const resumeData: ResumeData = { name, email, phone, experience, skills, picture };

    // Generate resume
    generateResume(resumeData);
};

// Function to generate resume content
const generateResume = (data: ResumeData): void => {
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
    resumeOutput.innerHTML = ""; // Clear previous output

    // Add picture if available
    if (data.picture) {
        const img = document.createElement("img");
        const reader = new FileReader();
        reader.onload = (e) => {
            img.src = e.target?.result as string;
            img.alt = "Profile Picture";
            img.style.width = "150px";
            img.style.height = "150px";
            img.style.borderRadius = "50%";
            resumeOutput.appendChild(img);
        };
        reader.readAsDataURL(data.picture);
    }

    // Add other details
    const content = `
        <h2>${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Experience</h3>
        <p>${data.experience}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;
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
document.getElementById("resumeForm")?.addEventListener("submit", handleFormSubmit);
