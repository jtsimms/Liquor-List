// js/log.js

document.addEventListener('DOMContentLoaded', () => {
    const logForm = document.querySelector('form');

    logForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(logForm);
        const liquorName = formData.get('liquor-name');
        const rating = formData.get('rating');
        const review = formData.get('review');

        // Post the new review
        fetch('/api/reviews', {  // Replace with actual API endpoint
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ liquorName, rating, review })
        })
        .then(response => response.json())
        .then(data => {
            alert('Your review has been submitted!');
            logForm.reset();
        })
        .catch(error => console.error('Error submitting review:', error));
    });
});
