// js/index.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5001/api/reviews')
        .then(response => response.json())
        .then(data => {
            // Your code to handle the reviews
            const reviewsList = document.getElementById('reviews-list');
            reviewsList.innerHTML = data.map(review => `
                <li>
                    <strong>${review.liquorName}</strong>: ${review.rating} stars - ${review.review}
                </li>
            `).join('');
        })
        .catch(error => console.error('Error fetching reviews:', error));
});
