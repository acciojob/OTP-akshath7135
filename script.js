//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            // Move to the next input if a number is entered
            if (e.inputType !== "deleteContentBackward" && input.value) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                // If the field is empty, move focus to the previous input
                if (input.value === "" && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });
});
