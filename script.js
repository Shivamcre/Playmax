document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('movieModal');
    const closeModal = document.querySelector('.close');
    const moviePlayer = document.getElementById('moviePlayer');

    // Array of movies with local video file paths
    const movies = [
        { title: "Movie 1", image: "https://source.unsplash.com/200x300/?movie1", video: "videos/movie1.mp4" },
        { title: "Movie 2", image: "https://source.unsplash.com/200x300/?movie2", video: "videos/movie2.mp4" },
        // Add more movies as needed
    ];

    const contentGrid = document.querySelector('#movies .content-grid');

    movies.forEach(movie => {
        const contentItem = document.createElement

    )}