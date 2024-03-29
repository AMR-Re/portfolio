//====================Contact=======================

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('', '', '', '')
        .then(() => {
            // Show sent message
            contactMessage.textContent = ' Sent successfully ✅';
            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            // Clear input Fields
            contactForm.reset();
        })
        .catch(() => {
            // Show error message
            contactMessage.textContent = ' Not sent (service error) ❌';
        });
};

contactForm.addEventListener('submit', sendEmail);
