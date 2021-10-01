$(document).ready(function(){
    $('body').on('submit', '#searchForm', function (e) {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

//Get Movies From OMDB API
function getMovies(searchText) {
    $.ajax({
        method: 'Get',
        url: 'http://www.omdbapi.com/?apikey=65a08387&s=' + searchText
    }).done(function (data) {
        let movies = data.Search;
        let output = '';
        $.each(movies, function (index, movie) {
            output += `
                <li>
                    <a hef="#">
                        <img src="${movie.Poster}">
                        <h2>${movie.Title}</h2>
                        <p>Release Year: ${movie.Year}</p>
                    </a>
                </li>
                `;
        });
        $('#movies').html(output);
    });
}