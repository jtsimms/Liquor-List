// js/log.js

document.getElementById('review-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const liquorName = document.getElementById('liquor-name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    fetch('http://localhost:5001/api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            liquorName: liquorName,
            rating: parseInt(rating, 10),
            review: review
        })
    })
        .then(response => response.json())
        .then(data => {
            // Your code to handle the review submission response
            console.log('Review submitted:', data.message);
            alert('Review submitted!');
        })
        .catch(error => console.error('Error submitting review:', error));
});
