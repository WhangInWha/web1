$(document).ready(function(){
    $('body').on('submit', '#searchForm', function (e) {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

// Before Movie Details Page
$(document).on('pagebeforeshow', '#movie', function () {
    let movieId = sessionStorage.getItem('movieId');
    getMovie(movieId);
})

// Single Movie Selected
function movieClicked(id) {
    sessionStorage.setItem('movieId', id);
    $.mobile.changePage('movie.html');
}

//Get Movies From OMDB API
function getMovies(searchText) {
    $.ajax({
        method: 'Get',
        url: 'http://www.omdbapi.com/?apikey=65a08387&s=' + searchText
    }).done(function (data) {
        let movies = data.Search;
        let output = '';
        $.each(movies, function(index, movie) {
            output += `
                <li>
                    <a onclick="movieClicked('${movie.imdbID}')" href="#">
                        <img src="${movie.Poster}">
                        <h2>${movie.Title}</h2>
                        <p>Release Year: ${movie.Year}</p>
                    </a>
                </li>
                `;
        });
        $('#movies').html(output).listview('refresh');
    });
}

// Get Singel Movie
function getMovie(movieId) {
    $.ajax({
        method: 'Get',
        url: 'http://www.omdbapi.com/?apikey=65a08387&i=' + movieId
    }).done(function (movie) {
        let movieTop = `
            <div style="text-align:center">
                <h1>${movie.Title}</h1>
                <img src="${movie.Poster}">
            </di>
        `;
        $('#movieTop').html(movieTop);

        let movieDetails = `
            <li><strong>Genre:</strong> ${movie.Genre}</div>
            <li><strong>Rated:</strong> ${movie.Rated}</div>
            <li><strong>Released:</strong> ${movie.Released}</div>
            <li><strong>Runtime:</strong> ${movie.Runtime}</div>
            <li><strong>IMDB Rating:</strong> ${movie.imdbRating}</div>            
            <li><strong>IMDB Votes:</strong> ${movie.imdbVotes}</div>            
            <li><strong>Actors:</strong> ${movie.Actors}</div>
            <li><strong>Director:</strong> ${movie.Director}</div>
        `;
        $('#movieDetails').html(movieDetails).listview('refresh');
    });
}