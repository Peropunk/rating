// Image data array with sample images
const images = [
    { id: 1, src: 'https://i.postimg.cc/2jVM2kgG/Screenshot-2024-11-14-194315.png', title: 'Image 1', rating: 0 },
    { id: 2, src: 'https://i.postimg.cc/BQDq7cRm/Screenshot-2024-11-14-194655.png', title: 'Image 2', rating: 0 },
    { id: 3, src: 'https://i.postimg.cc/LXCXR9Vv/Screenshot-2024-11-14-195107.png', title: 'Image 3', rating: 0 }
];

function renderImages() {
    const container = document.getElementById('imageContainer');
    container.innerHTML = '';

    images.forEach((image) => {
        const card = document.createElement('div');
        card.className = 'image-card';

        card.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <h4>${image.title}</h4>
            <div class="rating">
                <button onclick="rateImage(${image.id}, 1)">👍</button>
                <button onclick="rateImage(${image.id}, -1)">👎</button>
            </div>
            <p>Rating: <span id="rating-${image.id}">${image.rating}</span></p>
        `;

        container.appendChild(card);
    });
}

function updateLeaderboard() {
    const leaderboard = document.getElementById('leaderboardList');
    leaderboard.innerHTML = '';

    // Sort images by rating in descending order
    const sortedImages = [...images].sort((a, b) => b.rating - a.rating);

    sortedImages.forEach((image) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        item.innerHTML = `
            <span>${image.title}</span>
            <span>${image.rating}</span>
        `;
        leaderboard.appendChild(item);
    });
}

function rateImage(id, change) {
    const image = images.find(img => img.id === id);
    if (image) {
        image.rating += change;
        document.getElementById(`rating-${id}`).textContent = image.rating;
        updateLeaderboard();
    }
}

// Initial rendering
renderImages();
updateLeaderboard();
