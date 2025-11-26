const movies = [
    {
        title: "Inception",
        image: "https://via.placeholder.com/300x450?text=Inception",
        year: 2010,
        rating: "8.8",
        link: "https://www.netflix.com/"
    },
    {
        title: "John Wick",
        image: "https://via.placeholder.com/300x450?text=John+Wick",
        year: 2014,
        rating: "7.4",
        link: "https://www.amazon.com/"
    },
    {
        title: "Breaking Bad",
        image: "https://via.placeholder.com/300x450?text=Breaking+Bad",
        year: 2008,
        rating: "9.5",
        link: "https://www.netflix.com/"
    }
];

const grid = document.getElementById("movies-grid");

function loadMovies(list) {
    grid.innerHTML = "";
    list.forEach(m => {
        grid.innerHTML += `
            <div class="movie-card" onclick="openMovie('${m.title}')">
                <img src="${m.image}">
                <h3 style="padding:10px;">${m.title}</h3>
                <p style="padding:10px;">السنة: ${m.year}</p>
                <p style="padding:10px;">التقييم: ⭐ ${m.rating}</p>
            </div>
        `;
    });
}

loadMovies(movies);

function searchMovie() {
    let q = document.getElementById("search").value.toLowerCase();
    let results = movies.filter(m => m.title.toLowerCase().includes(q));
    loadMovies(results);
}

function openMovie(title) {
    localStorage.setItem("movieTitle", title);
    window.location.href = "movie.html";
}
