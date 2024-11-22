
// Form Submission Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const selectedPackage = document.getElementById('package').value;
        const message = document.getElementById('message').value;

        // Alert confirmation message
        alert(
            `Thank you, ${name}!\n\nYour message has been received.\n\nDetails:\nEmail: ${email}\nSelected Package: ${selectedPackage}\nMessage: ${message}`
        );

        // Clear form fields after submission
        contactForm.reset();
    });
}

// Image Interaction Handling
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach((image) => {
    // Hover event logging (optional)
    image.addEventListener('mouseover', () => {
        console.log(`Hovering over image: ${image.alt}`);
    });

    // Click event listener for each image
    image.addEventListener('click', () => {
        alert(`You clicked on: ${image.alt}`);
        
        // Optional: Open the image in a new tab
        // window.open(image.src, '_blank');
    });
});
