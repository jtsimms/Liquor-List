// js/liquor-looksee.js

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const liquorId = params.get('id');
    const liquorName = document.getElementById('liquor-name');
    const liquorRating = document.getElementById('liquor-rating');
    const liquorDescription = document.getElementById('liquor-description');
    const storeLocation = document.getElementById('store-location');

    // Fetch liquor details
    fetch(`/api/liquors/${liquorId}`)  // Replace with actual API endpoint
        .then(response => response.json())
        .then(data => {
            liquorName.textContent = data.name;
            liquorDescription.textContent = data.description;
            liquorRating.innerHTML = '★'.repeat(data.rating) + '☆'.repeat(10 - data.rating);
            storeLocation.textContent = `Available at: ${data.storeLocation}`;
        })
        .catch(error => console.error('Error fetching liquor details:', error));
});
