document.getElementById('surveyForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === "") {
        nameError.textContent = "Name is required!";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email address!";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Age
    const age = document.getElementById('age').value;
    const ageError = document.getElementById('ageError');
    if (age <= 0) {
        ageError.textContent = "Please enter a valid age!";
        isValid = false;
    } else {
        ageError.textContent = "";
    }

    // Validate Feedback
    const feedback = document.getElementById('feedback').value;
    const feedbackError = document.getElementById('feedbackError');
    if (feedback.trim() === "") {
        feedbackError.textContent = "Feedback is required!";
        isValid = false;
    } else {
        feedbackError.textContent = "";
    }

    // Validate Rating
    const rating = document.getElementById('rating').value;
    const ratingError = document.getElementById('ratingError');
    if (rating < 1 || rating > 5) {
        ratingError.textContent = "Please rate between 1 and 5!";
        isValid = false;
    } else {
        ratingError.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});
