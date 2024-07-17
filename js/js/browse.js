// js/browse.js

document.addEventListener('DOMContentLoaded', () => {
    const liquorsContainer = document.getElementById('liquors');

    // Fetch all liquors
    fetch('/api/liquors')  // Replace with actual API endpoint
        .then(response => response.json())
        .then(data => {
            data.liquors.forEach(liquor => {
                const liquorDiv = document.createElement('div');
                liquorDiv.classList.add('liquor');
                liquorDiv.innerHTML = `
                    <h3>${liquor.name}</h3>
                    <img src="${liquor.imageUrl}" alt="${liquor.name}">
                    <button onclick="window.location.href='liquor-looksee.html?id=${liquor.id}'">View Details</button>
                `;
                liquorsContainer.appendChild(liquorDiv);
            });
        })
        .catch(error => console.error('Error fetching liquors:', error));
});
