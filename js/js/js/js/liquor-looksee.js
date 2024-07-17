// js/liquor-looksee.js

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const liquorId = params.get('id');

    if (liquorId) {
        fetch(`http://localhost:5001/api/liquors/${liquorId}`)
            .then(response => response.json())
            .then(data => {
                // Your code to handle the liquor details
                const liquorDetails = document.getElementById('liquor-details');
                liquorDetails.innerHTML = `
                    <h2>${data.name}</h2>
                    <p><strong>Type:</strong> ${data.type}</p>
                    <p><strong>Alcohol Content:</strong> ${data.alcohol_content}%</p>
                    <p><strong>Description:</strong> ${data.description}</p>
                `;
            })
            .catch(error => console.error('Error fetching liquor details:', error));
    } else {
        console.error('No liquor ID found in the URL');
    }
});
