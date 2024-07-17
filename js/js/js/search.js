// js/search.js

document.addEventListener("DOMContentLoaded", () => {
    // Handle search form submission
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const query = document.querySelector('input').value;
        alert(`Searching for: ${query}`);
        // Perform search operation (API call or redirect)
    });
});
