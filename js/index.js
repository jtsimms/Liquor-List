// js/index.js

document.addEventListener('DOMContentLoaded', () => {
    const feed = document.getElementById('feed');
    const noReviews = document.getElementById('no-reviews');
    
    // Fetch the latest reviews
    fetch('/api/reviews')  // Replace with actual API endpoint
        .then(response => response.json())
        .then(data => {
            if (data.reviews.length === 0) {
                noReviews.style.display = 'block';
            } else {
                noReviews.style.display = 'none';
                data.reviews.forEach(review => {
                    const reviewDiv = document.createElement('div');
                    reviewDiv.classList.add('review');
                    reviewDiv.innerHTML = `
                        <h3>${review.user}</h3>
                        <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(10 - review.rating)}</div>
                        <p>${review.text}</p>
                    `;
                    feed.appendChild(reviewDiv);
                });
            }
        })
        .catch(error => console.error('Error fetching reviews:', error));
});
