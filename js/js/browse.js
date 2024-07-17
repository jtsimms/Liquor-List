// js/browse.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5001/api/liquors')
        .then(response => response.json())
        .then(data => {
            // Your code to handle the list of liquors
            const liquorsList = document.getElementById('liquors-list');
            liquorsList.innerHTML = data.map(liquor => `
                <li>
                    <a href="liquor-looksee.html?id=${liquor.id}">${liquor.name}</a>
                </li>
            `).join('');
        })
        .catch(error => console.error('Error fetching liquors:', error));
});
