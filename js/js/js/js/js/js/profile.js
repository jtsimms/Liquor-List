// js/profile.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5001/api/user/profile')
        .then(response => response.json())
        .then(data => {
            // Your code to handle the user profile
            const profileSection = document.getElementById('profile');
            profileSection.innerHTML = `
                <h2>${data.username}</h2>
                <p><strong>Bio:</strong> ${data.bio}</p>
                <p><strong>Favorites:</strong> ${data.favorites.join(', ')}</p>
            `;
        })
        .catch(error => console.error('Error fetching user profile:', error));
});
