document.addEventListener('DOMContentLoaded', function() {
    // Example: Alert when the form is submitted
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            const recipient = document.getElementById('recipient').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!recipient || !subject || !message) {
                alert('Please fill in all fields before submitting.');
                event.preventDefault(); // Prevent form submission
            } else {
                alert('Email is being sent to ' + recipient);
            }
        });
    }
});