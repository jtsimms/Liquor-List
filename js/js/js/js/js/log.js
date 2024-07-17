// js/log.js

document.addEventListener("DOMContentLoaded", () => {
    // Handle log drink form submission
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const liquorName = document.querySelector('input[name="liquor-name"]').value;
        const rating = document.querySelector('input[name="rating"]').value;
        const reviewContent = document.querySelector('textarea[name="review"]').value;

        alert(`Logged Drink:
        Name: ${liquorName}
        Rating: ${rating}
        Review: ${reviewContent}`);
        // Perform log operation (API call or save to local storage)
    });
});
