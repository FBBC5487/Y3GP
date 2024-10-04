// Change the message when the button is clicked
document.getElementById('changeMessageButton').addEventListener('click', function() {
    document.getElementById('message').textContent = 'You clicked the button! Welcome to the world of JavaScript.';
});

// Navigate to the next page when the next button is clicked
document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'next.html'; // Redirects to next.html
});
