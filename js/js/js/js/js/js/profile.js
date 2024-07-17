// js/profile.js

document.addEventListener('DOMContentLoaded', () => {
    const profileInfo = document.getElementById('profile-info');

    // Fetch user profile details
    fetch('/api/user/profile')  // Replace with actual API endpoint
        .then(response => response.json())
        .then(data => {
            profileInfo.innerHTML = `
                <h2>${data.username}</h2>
                <p>Bio: ${data.bio}</p>
                <h3>Favorites</h3>
                <ul>
                    ${data.favorites.map(favorite => `<li>${favorite}</li>`).join('')}
                </ul>
            `;
        })
        .catch(error => console.error('Error fetching profile:', error));
});
