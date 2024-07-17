// js/profile.js

document.addEventListener("DOMContentLoaded", () => {
    // Simulate fetching profile data
    const fetchProfileData = () => {
        return {
            username: 'YourUsername',
            favorites: [
                { name: 'Favorite Liquor 1', link: 'liquor-looksee.html' },
                { name: 'Favorite Liquor 2', link: 'liquor-looksee.html' }
            ]
        };
    };

    // Fetch profile data
    const profileData = fetchProfileData();

    // Display profile data
    document.querySelector('#profile-info').innerHTML = `
        <h2>Profile</h2>
        <p><strong>Username:</strong> ${profileData.username}</p>
        <h3>Favorites</h3>
        <ul>
            ${profileData.favorites.map(fav => `<li><a href="${fav.link}">${fav.name}</a></li>`).join('')}
        </ul>
    `;
});
