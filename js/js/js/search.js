// js/search.js

document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.getElementById('search-query').value;
    fetch(`http://localhost:5001/api/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            // Your code to handle the search results
            const searchResults = document.getElementById('search-results');
            searchResults.innerHTML = data.map(result => `
                <li>
                    <a href="liquor-looksee.html?id=${result.id}">${result.name}</a>
                </li>
            `).join('');
        })
        .catch(error => console.error('Error searching for liquors:', error));
});
