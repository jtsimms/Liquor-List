// js/browse.js

document.addEventListener("DOMContentLoaded", () => {
    // Function to simulate fetching liquor bottles
    const fetchLiquors = () => {
        return [
            { name: 'Whiskey', link: 'liquor-looksee.html' },
            { name: 'Vodka', link: 'liquor-looksee.html' },
            { name: 'Beer', link: 'liquor-looksee.html' },
        ];
    };

    // Render list of bottles
    const renderLiquors = (liquors) => {
        const liquorContainer = document.querySelector('#liquors');
        liquorContainer.innerHTML = '';  // Clear existing bottles

        liquors.forEach(liquor => {
            const liquorElement = document.createElement('div');
            liquorElement.classList.add('liquor');
            liquorElement.innerHTML = `
                <a href="${liquor.link}">${liquor.name}</a>
            `;
            liquorContainer.appendChild(liquorElement);
        });
    };

    // Fetch and render liquor bottles
    const liquors = fetchLiquors();
    renderLiquors(liquors);
});
