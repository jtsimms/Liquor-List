// js/index.js

document.addEventListener("DOMContentLoaded", () => {
    // Fetch reviews for the homepage feed
    const fetchReviews = () => {
        return [
            { reviewer: 'Reviewer 1', content: 'This is a great drink!', rating: 4 },
            { reviewer: 'Reviewer 2', content: 'Not my favorite, but still good.', rating: 2 },
        ];
    };

    // Render reviews on the homepage
    const renderReviews = (reviews) => {
        const reviewsContainer = document.querySelector('#reviews');
        reviewsContainer.innerHTML = '';  // Clear existing reviews

        if (reviews.length === 0) {
            document.querySelector('#no-reviews').style.display = 'block';
        } else {
            document.querySelector('#no-reviews').style.display = 'none';
            reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');
                reviewElement.innerHTML = `
                    <h3>${review.reviewer}</h3>
                    <p>${review.content}</p>
                    <div class="rating">${renderStars(review.rating)}</div>
                    <button class="like-button">Like</button>
                    <button class="dislike-button">Dislike</button>
                `;
                reviewsContainer.appendChild(reviewElement);

                reviewElement.querySelector('.like-button').addEventListener('click', () => {
                    alert('Liked!');
                });

                reviewElement.querySelector('.dislike-button').addEventListener('click', () => {
                    alert('Disliked!');
                });
            });
        }
    };

    // Render star ratings
    const renderStars = (rating) => {
        let starsHtml = '';
        for (let i = 1; i <= 10; i++) {
            starsHtml += i <= rating ? '★' : '☆';
        }
        return starsHtml;
    };

    // Fetch and render reviews
    const reviews = fetchReviews();
    renderReviews(reviews);
});
