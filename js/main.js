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
        console.log(data);
    });
}