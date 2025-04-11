//your JS code here. If required.
// Select all input fields with the class 'code'
const inputs = document.querySelectorAll('.code');

// Function to handle input in the OTP fields
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Move to the next input field if the current input is filled
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Handle backspace key
        if (e.key === 'Backspace' && index > 0 && input.value === '') {
            inputs[index - 1].focus();
        }
    });
});