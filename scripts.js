document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('movieModal');
    const closeModal = document.querySelector('.close');
    const moviePlayer = document.getElementById('moviePlayer');

    const movies = [
        { title: "Inception", image: "https://source.unsplash.com/200x300/?inception", video: "videos/video1.mp4" },
        { title: "Interstellar", image: "https://source.unsplash.com/200x300/?interstellar", video: "videos/video1.mp4" },
        { title: "The Dark Knight", image: "https://source.unsplash.com/200x300/?darkknight", video: "videos/video1.mp4" }
    ];

    const contentGrid = document.querySelector('#movies .content-grid');

    movies.forEach(movie => {
        const contentItem = document.createElement('div');
        contentItem.classList.add('content-item');
        contentItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="overlay">
                <h3>${movie.title}</h3>
            </div>
        `;
        contentItem.addEventListener('click', () => {
            moviePlayer.src = movie.video;
            modal.style.display = 'block';
        });
        contentGrid.appendChild(contentItem);
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
        moviePlayer.src = ''; // Stop the video
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            moviePlayer.src = ''; // Stop the video
        }
    };
});
