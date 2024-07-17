// js/search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('form');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchQuery = searchForm.querySelector('input').value;

        fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`)  // Replace with actual API endpoint
            .then(response => response.json())
            .then(data => {
                const resultsContainer = document.getElementById('search-results');
                resultsContainer.innerHTML = '';
                data.results.forEach(result => {
                    const resultDiv = document.createElement('div');
                    resultDiv.classList.add('result');
                    resultDiv.innerHTML = `
                        <h3>${result.name}</h3>
                        <button onclick="window.location.href='liquor-looksee.html?id=${result.id}'">View Details</button>
                    `;
                    resultsContainer.appendChild(resultDiv);
                });
            })
            .catch(error => console.error('Error fetching search results:', error));
    });
});
